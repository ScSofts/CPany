import { QueryPlugin, Logger } from '@cpany/core';
import { IHandle, ISubmission, Verdict, ParticipantType } from '@cpany/types';
import type { IHandleWithLuogu, UserDataDto, RecordListDto } from '@cpany/types/luogu';

import { AxiosInstance } from 'axios';

const cache = new Map<string, ISubmission[]>();

export function addToCache(handle: IHandle) {
  cache.set(handle.handle, handle.submissions);
}

export function createLuoguHandlePlugin(api: AxiosInstance): QueryPlugin {
  return {
    name: 'luogu',
    platform: 'luogu',
    async query(id, { logger }) {
      const user = await fetchUser(api, id);
      try {
        user.submissions = await fetchSubmissions(api, user.luogu.name, id, logger);
      } catch (error) {
        logger.error(`Error: fail to fetch submissions of Luogu handle ${id}`);
        logger.error((error as any).message);
      }
      return JSON.stringify(user, null, 2);
    }
  };
}

async function fetchUser(api: AxiosInstance, id: string): Promise<IHandleWithLuogu> {
  const { data } = await api.get<UserDataDto>('/user/' + id);
  return {
    type: 'luogu/handle',
    handle: id,
    submissions: [],
    avatar: `https://cdn.luogu.com.cn/upload/usericon/${id}.png`,
    handleUrl: `https://www.luogu.com.cn/user/${id}`,
    luogu: {
      name: data.currentData.user.name,
      color: data.currentData.user.color.toLowerCase(),
      ranking: data.currentData.user.ranking,
      slogan: data.currentData.user.slogan
    }
  };
}

async function fetchSubmissions(
  api: AxiosInstance,
  name: string,
  id: string,
  logger: Logger
): Promise<ISubmission[]> {
  const preSubs: ISubmission[] = cache.get(id) ?? [];
  const maxId = preSubs.length > 0 ? preSubs[0].id : 0;
  const subs: ISubmission[] = [];

  let page = 1;
  while (true) {
    let isEnd = false;
    const oldLen = subs.length;

    const { data } = await api.get<RecordListDto>('/record/list', {
      params: { user: id, page }
    });
    const curSubs = data.currentData.records.result;

    for (const sub of curSubs) {
      if (sub.id <= maxId) {
        isEnd = true;
        break;
      }
      if (sub.status === 0) continue;
      if (sub.problem.type === 'CF') continue;

      subs.push({
        type: 'luogu',
        id: sub.id,
        creationTime: sub.submitTime,
        language: parseLanguage(sub.problem.type, sub.language),
        verdict: parseVerdict(sub.status),
        author: {
          members: [String(id)],
          participantTime: sub.submitTime,
          participantType: ParticipantType.PRACTICE
        },
        problem: {
          type: 'luogu/' + sub.problem.type,
          id: sub.problem.pid,
          name: sub.problem.title,
          rating: sub.problem.difficulty,
          problemUrl: `https://www.luogu.com.cn/problem/${sub.problem.pid}`
        },
        submissionUrl: `https://www.luogu.com.cn/record/${sub.id}`
      });
    }

    if (isEnd || curSubs.length === 0) break;

    logger.info(
      `Fetch: (name: ${name}, id: ${id}) has fetched ${
        subs.length - oldLen
      } new submissions at page ${page}`
    );

    page = page + 1;
  }

  return [...subs, ...preSubs];
}

function parseVerdict(status: number) {
  if (status === 12) return Verdict.OK;
  else if (status === 14) return Verdict.WRONG_ANSWER;
  else if (status === 2) return Verdict.COMPILATION_ERROR;
  return Verdict.FAILED;
}

function parseLanguage(type: string, id: number) {
  const list = [
    '',
    'Pascal',
    'C',
    'C++ 98',
    'C++ 11',
    'Unknown',
    'Python 2',
    'Python 3',
    'Java',
    'Node.js LTS',
    'Unknown',
    'C++ 14',
    'C++ 17',
    'Ruby',
    'Go',
    'Rust',
    'PHP',
    'C# Mono',
    'Visual Basic Mono',
    'Haskell',
    'Kotlin/native',
    'Kotlin/JVM',
    'Scala',
    'Perl',
    'PyPy 2',
    'PyPy 3',
    '文言'
  ];
  return id < list.length ? list[id] : 'Unknown';
}
