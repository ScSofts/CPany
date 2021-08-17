#!/usr/bin/env node

import path from 'path';
import { readFileSync, existsSync } from 'fs';
import { cac } from 'cac';
import { createServer, build } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'vite-plugin-icons';

import { createCPanyPlugin } from './plugin';

const version = JSON.parse(
  readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
).version;

interface ICliOption {
  app?: string;
  host?: string;
  data: string;
  out: string;
  port: number;
  emptyOutDir: boolean;
}

const cli = cac('cpany')
  .option('--app <app path>', 'App path')
  .option('--data <data path>', 'Data path', { default: '.' });

cli
  .command('dev', 'Start CPany dev server')
  .option('--host [host]', 'specify hostname')
  .option('--port <port>', 'port to listen to', { default: 3000 })
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
        host: option.host
      },
      envDir: path.resolve(__dirname, '../'),
      plugins: [
        vue(),
        WindiCSS(),
        Icons(),
        await createCPanyPlugin(pluginOption)
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
  .command('', 'Build CPany site')
  .alias('build')
  .option('--emptyOutDir', "force empty outDir when it's outside of root", {
    default: false
  })
  .option('--out <output path>', 'Output path', { default: 'dist' })
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
        outDir: path.resolve(option.out),
        emptyOutDir: option.emptyOutDir
      },
      envDir: path.resolve(__dirname, '../'),
      plugins: [
        vue(),
        WindiCSS(),
        Icons(),
        await createCPanyPlugin(pluginOption)
      ],
      resolve: {
        alias: {
          '@cpany/types': findTypesPackagePath(),
          '@': path.resolve(appPath, 'src')
        }
      }
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
