'use strict'

// @ts-check

import { join } from 'node:path'

const ROOT = process.cwd()

/**
 * @type {Record<string, string>}
 */
export const PATH = {
  OUT_DIR: join(ROOT, 'build'),
  DATA_DIR: join(ROOT, 'data'),
  WEEKS_DIR: join(PATH.DATA_PATH, 'weeks'),
  EVENTS_DIR: join(PATH.DATA_PATH, 'events'),
  TEMPLATES_DIR: join(ROOT, 'src/templates'),
}

export const TEMPLATE_FILE_EXT = '.njk'