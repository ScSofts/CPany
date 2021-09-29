#!/usr/bin/env node

import path from 'path';
import { readFileSync, existsSync } from 'fs';
import { cac } from 'cac';
import { createServer, build } from 'vite';

import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

import Compress from '@cpany/compress';
import { run as runAction } from '@cpany/action';

import { createCPanyPlugin } from './plugin';

const version = JSON.parse(
  readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
).version;

interface ICliOption {
  app?: string;
  data: string;

  // build
  outDir: string;
  emptyOutDir: boolean;

  // dev
  host?: string;
  port: number;
  force: boolean;
  open: boolean;
}

interface ICliActionOption {
  maxRetry: number;
  plugins: string;
}

const cli = cac('cpany')
  .option('--app <dir>', 'app directory')
  .option('--data <dir>', 'data directory', { default: '.' });

cli
  .command('', 'Build CPany site')
  .alias('build')
  .option('--emptyOutDir', "force empty outDir when it's outside of root", {
    default: false
  })
  .option('--outDir <dir>', 'output directory', { default: 'dist' })
  .action(async (option) => {
    const appPath = path.resolve(option.app ?? findDefaultAppPath());
    const dataPath = path.resolve(option.data);
    const pluginOption = {
      appRootPath: appPath,
      dataRootPath: dataPath,
      cliVersion: version
    };

    await build({
      configFile: false,
      root: appPath,
      build: {
        outDir: path.resolve(option.outDir),
        emptyOutDir: option.emptyOutDir,
        chunkSizeWarningLimit: 1024
      },
      envDir: path.resolve(__dirname, '../'),
      plugins: [
        vue(),
        WindiCSS(),
        Icons(),
        Components({
          resolvers: IconsResolver()
        }),
        await createCPanyPlugin(pluginOption),
        Compress({ enable: true })
      ],
      resolve: {
        alias: {
          '@cpany/types': findTypesPackagePath(),
          '@': path.resolve(appPath, 'src')
        }
      },
      json: {
        namedExports: false,
        stringify: true
      }
    });
  });

cli
  .command('dev', 'Start CPany dev server')
  .option('--host [host]', 'specify hostname')
  .option('--port <port>', 'port to listen to', { default: 3000 })
  .option('--open', 'open browser on startup', { default: false })
  .option('--force', 'force the optimizer to ignore the cache and re-bundle', {
    default: false
  })
  .action(async (option: ICliOption) => {
    const appPath = path.resolve(option.app ?? findDefaultAppPath());
    const dataPath = path.resolve(option.data);
    const pluginOption = {
      appRootPath: appPath,
      dataRootPath: dataPath,
      cliVersion: version
    };

    const server = await createServer({
      configFile: false,
      root: appPath,
      server: {
        port: option.port,
        host: option.host,
        force: option.force,
        open: option.open
      },
      envDir: path.resolve(__dirname, '../'),
      plugins: [
        vue(),
        WindiCSS(),
        Icons(),
        Components({
          resolvers: IconsResolver()
        }),
        await createCPanyPlugin(pluginOption),
        Compress({ enable: false })
      ],
      resolve: {
        alias: {
          '@cpany/types': findTypesPackagePath(),
          '@': path.resolve(appPath, 'src')
        }
      }
    });

    await server.listen();
  });

cli
  .command('action <basePath>', 'Run @cpany/action locally')
  .option('--max-retry <number>', 'CPany max retry times', { default: 10 })
  .option('--plugins <string>', 'CPany plugins', { default: 'codeforces,hdu' })
  .action(async (basePath: string, { maxRetry, plugins: _plugins }: ICliActionOption) => {
    const plugins = _plugins
      .split(',')
      .map((plugin) => plugin.trim().toLowerCase())
      .filter((plugin) => plugin !== undefined && plugin !== null && plugin !== '');

    await runAction({
      logger: false,
      basePath,
      disableGit: true,
      configPath: 'cpany.yml',
      maxRetry,
      plugins
    });
  });

cli.help();

cli.version(version);

cli.parse();

function findDefaultAppPath() {
  const segment = __dirname.split(path.sep);
  while (segment.length > 0) {
    const tryAppPath = path.join(...segment, 'node_modules', '@cpany', 'app');
    if (existsSync(tryAppPath)) {
      return tryAppPath;
    }
    segment.pop();
  }
  throw new Error('Can not find default app in node_modules');
}

function findTypesPackagePath() {
  const paths = [
    path.resolve(__dirname, '../node_modules/@cpany/types/src'),
    path.resolve(__dirname, '../../types/src')
  ];
  for (const path of paths) {
    if (existsSync(path)) {
      return path;
    }
  }
  throw new Error('Can not find @cpany/types package in node_modules');
}
