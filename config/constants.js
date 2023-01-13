'use strict'

// @ts-check

import { join } from 'node:path'

const ROOT = process.cwd()

export const TEMPLATE_FILE_EXT = '.njk'
export const DATA_DIR = join(ROOT, 'data')
export const OUT_DIR = join(ROOT, 'build')
export const WEEKS_DIR = join(DATA_DIR, 'weeks')
export const EVENTS_DIR = join(DATA_DIR, 'events')
export const TEMPLATES_DIR = 'src/templates'
