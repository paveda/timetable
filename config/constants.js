'use strict'

// @ts-check

import { join } from 'node:path'

const CWD = process.cwd()
export const OUT_DIR = join(CWD, 'build')
export const EVENTS_DIR = join(CWD, 'data/events')
export const WEEKS_DIR = join(CWD, 'data/weeks')
export const TEMPLATE_PATH = join(CWD, 'src/template.njk')
export const SRC_PATH = join(CWD, 'src')