// @ts-check

import { join } from 'node:path'
import { writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { formatHtml, loadEvents, loadWeeks, renderWeek } from './scripts/index.js'
import { render } from './scripts/render.js'
import { OUT_DIR } from './config/constants.js'

const events = await loadEvents()
const weeks = await loadWeeks()

// Create out dir if it's not exists
if (!existsSync(OUT_DIR)) {
  await mkdir(OUT_DIR)
}

/** @type {Map<string, string>} */
const renderedWeeks = new Map()

for (const [name, data] of weeks) {
  renderedWeeks.set(name, await renderWeek(data))
}

const pages = [...renderedWeeks.keys()]

for (const [name, week] of renderedWeeks) {
  await writeFile(
    join(OUT_DIR, name + '.html'),
    formatHtml(await render('page', {
      pages,
      week,
    }))
  )
}
