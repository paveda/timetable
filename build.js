'use strict'

// @ts-check

import { resolve, join } from 'node:path'
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import nunjucks from 'nunjucks'
import settings from './data/settings.js'

nunjucks.configure({
  autoescape: true,
})

const OUT_PATH = resolve('./build')
const DATA_PATH = resolve('./data/')
const WEEKS_PATH = join(DATA_PATH, 'weeks')
const EVENTS_PATH = join(DATA_PATH, 'events')
const TEMPLATES_PATH = resolve('./src/templates/')

const weekBasenames = await readdir(WEEKS_PATH)
const eventBaseames = await readdir(EVENTS_PATH)

const pageTemplate = await readFile(join(TEMPLATES_PATH, 'index.njk'), 'utf-8')
const weekTemplate = await readFile(join(TEMPLATES_PATH, 'week.njk'), 'utf-8')
const agendaTemplate = await readFile(join(TEMPLATES_PATH, 'agenda.njk'), 'utf-8')

const weekData = new Map()

for await (const basename of weekBasenames) {
  const module = await import(resolve('./data/weeks', basename))
  const weekName = basename.split('.')[0]

  weekData.set(weekName, module.default)
}

// console.dir(weekData)
// console.dir(weekNames)
// console.dir(weekTemplate)

/**
 * ============
 * Render weeks
 * ============
 */

const renderedWeeks = new Map()

for (const [name, data] of weekData) {
  const html = nunjucks.renderString(
    weekTemplate,
    {
      week: data,
    }
  )

  renderedWeeks.set(name, html)
}

// console.dir(renderedWeeks)

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
