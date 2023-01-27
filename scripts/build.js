'use strict'

// @ts-check

import { join } from 'node:path'
import { copyFile, writeFile } from 'node:fs/promises'
import nunjucks from 'nunjucks'
import { loaddir } from './loaddir.js'
import { loadModuleDefaultExport, loadText } from './loaders.js'
import { EVENTS_DIR, WEEKS_DIR, TEMPLATE_PATH, OUT_DIR, SRC_PATH } from '../config/constants.js'
import { copydir } from './copydir.js'

const events = await loaddir(EVENTS_DIR, loadText)

/** @type {Map<string, import('../src/types').WeekData>} */
const weeks = await loaddir(WEEKS_DIR, loadModuleDefaultExport)
const pages = [...weeks.keys()]
const template = await loadText(TEMPLATE_PATH)

for (const [name, week] of weeks) {
  const html = nunjucks.renderString(template, { pages, week })
  await writeFile(join(OUT_DIR, name + '.html'), html)
}

await copydir(
  join(SRC_PATH, 'styles'),
  join(OUT_DIR, 'styles')
)

await copyFile(
  join(SRC_PATH, 'app.js'),
  join(OUT_DIR, 'app.js')
)
