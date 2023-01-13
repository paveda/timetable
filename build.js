// @ts-check

import { writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { loadEvents, loadWeeks, renderWeek } from './scripts/index.js'
import { OUT_DIR } from './config/constants.js'

/**
 * =========
 * Load data
 * =========
 */

const events = await loadEvents()
const weeks = await loadWeeks()

// console.dir(events)
// console.dir(weeks)

/**
 * ======
 * Render
 * ======
 */

/**
 * @type {Record<string, string>}
 */
const renderedWeeks = new Map()

for (const [name, data] of weeks) {
  renderedWeeks.set(name, await renderWeek(data))
}

// console.dir(renderedWeeks)

// Create out dir if it's not exists
if (!existsSync(OUT_DIR)) {
  await mkdir(OUT_DIR)
}

// /**
//  * ============
//  * Render pages
//  * ============
//  */

// for (const [name, weekHtml] of renderedWeeks) {
//   const pageHtml = nunjucks.renderString(
//     pageTemplate,
//     {
//       pages: weekBasenames.map((name) => name.split('.')[0]),
//       week: weekHtml,
//     }
//   )

//   await writeFile(join(OUT_PATH, name + '.html'), formatHtml(pageHtml))
// }
