'use strict'

// @ts-check

import { join } from 'node:path'
import { writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import nunjucks from 'nunjucks'
import { formatHtml, loadDirFileNames, loadTemplates } from './scripts'
import { PATH } from './scripts'

nunjucks.configure('./src/templates', { autoescape: true })

/**
 * ============
 * Resolve Data 
 * ============
 */

const weekFileNames = await loadDirFileNames(PATH.WEEKS_DIR)
const eventFileNames = await loadDirFileNames(PATH.EVENTS_DIR)

/**
 * ==============
 * Load templates
 * ==============
 */

const templates = loadTemplates()

/**
 * =========
 * Load data
 * =========
 */

const eventsDataMap = new Ma
const weeksDataMap = new Map()


/**
 * ============
 * Render weeks
 * ============
 */
const renderedWeeks = new Map()

for (const [weekName, weekData] of weeksDataMap) {
  /**
   * ===========
   * Render days
   * ===========
   */
  const renderedDays = []

  for (const [dayName, dayData] of Object.entries(weekData)) {
    /**
     * =================
     * Render day events
     * =================
     */
    const renderedEvents = dayData.events?.map((event) => {
      return nunjucks.renderString(
        eventTemplate,
        { event }
      )
    })

    const renderedDay = nunjucks.renderString(
      dayTemplate,
      {
        day: {
          name: dayName,
          title: dayData.title,
        },
        events: renderedEvents,
      }
    )

    renderedDays.push(renderedDay)
  }

  const html = nunjucks.renderString(
    weekTemplate,
    { days: renderedDays }
  )

  renderedWeeks.set(weekName, html)
}

/**
 * ===================================
 * Create build dir if it's not exists
 * ===================================
 */

if (!existsSync(OUT_PATH)) {
  await mkdir(OUT_PATH)
}

/**
 * ============
 * Render pages
 * ============
 */

for (const [name, weekHtml] of renderedWeeks) {
  const pageHtml = nunjucks.renderString(
    pageTemplate,
    {
      pages: weekBasenames.map((name) => name.split('.')[0]),
      week: weekHtml,
    }
  )

  await writeFile(join(OUT_PATH, name + '.html'), formatHtml(pageHtml))
}
