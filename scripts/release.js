const { join } = require('path');
const { readJSON, writeJSON, writeFile, readFile } = require('fs-extra');
const execa = require('execa');

const packages = [
  './packages/action',
  './packages/app',
  './packages/cli',
  './packages/codeforces',
  './packages/hdu',
  './packages/luogu',
  './packages/atcoder',
  './packages/utils',
  './packages/core',
  './packages/types',
  './packages/compress'
];

async function check() {
  const result = await execa('git', ['branch']);
  if (result.stdout.search('main') < 0) {
    console.error(`Please re-run in main branch`);
    process.exit(1);
  }
}

async function run() {
  await check();

  const version = process.argv[2];

  if (!version || !/^\d+.\d+.\d+/.test(version)) {
    console.error(`Invalid version: ${version}`);
    process.exit(1);
  }

  console.log('Publish @cpany version:', version);

  for (const package of packages) {
    const path = join(package, 'package.json');
    const json = await readJSON(path);
    json.version = version;
    await writeJSON(path, json, { spaces: 2 });
  }

  await writeFile('./packages/cli/.env', `VITE_CLI_VERSION=${version}`);
  await writeFile('./packages/action/src/version.ts', `export const ActionVersion = '${version}';`);

  const readme = (await readFile('./README.md'))
    .toString()
    .replace(/yjl9903\/CPany@v\d+\.\d+\.\d+/, `yjl9903/CPany@v${version}`);
  await writeFile('./README.md', readme);
  await writeFile('./packages/cli/README.md', readme);

  await execa('npm', ['run', 'format'], { stdio: 'inherit' });
  await execa('npm', ['run', 'build'], { stdio: 'inherit' });

  await execa('git', ['add', '.'], { stdio: 'inherit' });
  await execa('git', ['commit', '-m', `release: v${version}`], { stdio: 'inherit' });

  await execa('git', ['tag', '-a', `v${version}`, '-m', `release: v${version}`], {
    stdio: 'inherit'
  });
  await execa('git', ['push', 'origin', `:refs/tags/v${version.split('.')[0]}`], {
    stdio: 'inherit'
  });
  await execa('git', ['tag', '-fa', `v${version.split('.')[0]}`, '-m', `release: v${version}`], {
    stdio: 'inherit'
  });
  await execa('git', ['push', 'origin', 'main', '--tags']);
}

run();
