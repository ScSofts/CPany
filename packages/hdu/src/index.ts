import path from 'path';

import type { IPlugin } from '@cpany/core';
import type { IHandleWithHdu } from '@cpany/types/hdu';
import { ICPanyPluginConfig, isHdu } from '@cpany/types';
import { listJsonFiles } from '@cpany/utils';

import { createHduHandlePlugin, addToCache } from './handle';

export async function hduPlugin(config: ICPanyPluginConfig): Promise<IPlugin[]> {
  const handlePath = path.join(config.dataRoot, 'hdu', 'handle');
  for await (const handle of listJsonFiles<IHandleWithHdu>(handlePath)) {
    if (isHdu(handle)) {
      addToCache(handle);
    }
  }

  return [createHduHandlePlugin()];
}

export default hduPlugin;
