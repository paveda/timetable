// @ts-check

import { join } from 'node:path'
import { readdir } from 'node:fs/promises'
import { WEEKS_DIR } from '../config/constants.js'
import { getFileNameWithoutExtention } from './utils.js'

/**
 * 
 * @returns {Promise<Map<string, import('../types').WeekData>>}
 */
export async function loadWeeks() {
  /** @type {Map<string, import('../types').WeekData>} */
  const data = new Map()
  const basenames = await readdir(WEEKS_DIR)

  for (const basename of basenames) {
    const module = await import(join(WEEKS_DIR, basename))

    data.set(
      getFileNameWithoutExtention(basename),
      module.default
    )
  }

  return data
}
