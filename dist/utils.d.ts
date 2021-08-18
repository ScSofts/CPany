import dayjs from 'dayjs';
export declare function listDir(dir: string, skipList?: Set<string>): AsyncGenerator<string>;
export declare function now(): dayjs.Dayjs;
export declare function sleep(duration: number): Promise<void>;
