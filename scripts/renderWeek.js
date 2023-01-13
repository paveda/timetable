// @ts-check

import { render } from './render.js'
import { renderDay } from './renderDay.js'

/**
 * 
 * @param {import('../types').WeekData} data 
 * @returns {Promise<string>}
 */
export async function renderWeek(data) {
  if (!data.days) return ''

  /** @type {string[]} */
  const renderedDays = []

  for (const [dayName, dayData] of Object.entries(data.days)) {
    renderedDays.push(await renderDay(dayName, dayData))
  }

  return render('week', {
    days: renderedDays,
  })
}