'use strict'

// @ts-check

import { join } from 'node:path'
import { writeFile } from 'node:fs/promises'
import { format } from 'prettier'
import nunjucks from 'nunjucks'
import { loaddir } from './loaddir.js'
import { loadModuleDefaultExport, loadText } from './loaders.js'
import { EVENTS_DIR, WEEKS_DIR, TEMPLATE_PATH, OUT_DIR } from '../config/constants.js'

const events = await loaddir(EVENTS_DIR, loadText)

/** @type {Map<string, import('../src/types').WeekData>} */
const weeks = await loaddir(WEEKS_DIR, loadModuleDefaultExport)

console.dir(weeks)

const pages = [...weeks.keys()]

const template = await loadText(TEMPLATE_PATH)

for (const [name, week] of weeks) {
  const html = nunjucks.renderString(template, { pages, week })
  writeFile(join(OUT_DIR, name + '.html'), html)
}
