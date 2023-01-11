'use strict'

// @ts-check

import { resolve, join } from 'node:path'
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import nunjucks from 'nunjucks'
import settings from './data/settings.js'

nunjucks.configure({ autoescape: true })

/**
 * =============
 * Resolve paths
 * =============
 */
const OUT_PATH = resolve('./build')
const DATA_PATH = resolve('./data/')
const WEEKS_PATH = join(DATA_PATH, 'weeks')
const EVENTS_PATH = join(DATA_PATH, 'events')
const TEMPLATES_PATH = resolve('./src/templates/')

const weekBasenames = await readdir(WEEKS_PATH)
const eventBaseames = await readdir(EVENTS_PATH)

/**
 * ==============
 * Load templates
 * ==============
 */

const pageTemplate = await readFile(join(TEMPLATES_PATH, 'page.njk'), 'utf-8')
const weekTemplate = await readFile(join(TEMPLATES_PATH, 'week.njk'), 'utf-8')
const dayTemplate = await readFile(join(TEMPLATES_PATH, 'day.njk'), 'utf-8')
const eventTemplate = await readFile(join(TEMPLATES_PATH, 'event.njk'), 'utf-8')

/**
 * =========
 * Load data
 * =========
 */

const weeksDataMap = new Map()

for await (const basename of weekBasenames) {
  const module = await import(resolve('./data/weeks', basename))
  const weekName = basename.split('.')[0]

  weeksDataMap.set(weekName, module.default)
}

/**
 * ============
 * Render weeks
 * ============
 */
const renderedWeeks = new Map()

for (const [weekName, weekData] of weekData) {
  /**
   * ===========
   * Render days
   * ===========
   */
  for (const [dayName, dayData] of Object.entries(weekData)) {
    
  }

  const html = nunjucks.renderString(
    weekTemplate,
    {
      week: weekData,
      events,
    }
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
  await writeFile(join(OUT_PATH, name + '.html'), pageHtml)
}
