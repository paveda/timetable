// @ts-check

import { render } from './render.js'
import { renderEvent } from './renderEvent.js'

/**
 * 
 * @param {string} name
 * @param {import('../types').DayData} data 
 * @returns {Promise<string>}
 */
export async function renderDay(name, data) {
  /** @type {string[]} */
  let renderedEvents = []

  if (data.agenda && data.agenda.length > 0) {
    renderedEvents = await Promise.all(data.agenda.map((event) => {
      return renderEvent(event)
    }))
  }
  
  const renderedDayAgenda = await render('agenda', {
    events: renderedEvents,
  })

  return render('day', {
    day: {
      name,
      title: data.title,
      agenda: renderedDayAgenda,
    },
  })
}
