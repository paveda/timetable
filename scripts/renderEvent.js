// @ts-check

import { render } from './render.js'

/**
 * 
 * @param {import('../types').EventData} event 
 * @returns {Promise<string>}
 */
export async function renderEvent(event) {
  return render('event', { event })
}