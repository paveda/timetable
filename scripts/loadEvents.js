// @ts-check

import { join } from 'node:path'
import { readdir, readFile } from 'node:fs/promises'
import { marked } from 'marked'
import { EVENTS_DIR } from '../config/constants.js'
import { getFileNameWithoutExtention } from './utils.js'

/**
 * @returns {Promise<Map<string, string>>}
 */
export async function loadEvents() {
  /** @type {Map<string, string>} */
  const data = new Map()
  const basenames = await readdir(EVENTS_DIR)

  for (const basename of basenames) {
    const markdown = await readFile(join(EVENTS_DIR, basename), 'utf-8')
    
    data.set(
      getFileNameWithoutExtention(basename),
      marked(markdown)
    )
  }

  return data
}
