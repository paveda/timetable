'use strict'

// @ts-check

import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { PATH, TEMPLATE_FILE_EXT} from './constants.js'

/**
 * 
 * @returns {Map<string, string>}
 */
export async function loadTemplates() {
  const { names } = await loadDir(PATH.TEMPLATES_DIR)

  /** @type {Map<string, string>} */
  const templates = new Map()

  for (const name in names) {
    const path = join(PATH.TEMPLATES_DIR, name + TEMPLATE_FILE_EXT)
    const template = await readFile(path, 'utf-8')

    templates.set(name, template)
  }

  return templates
}
