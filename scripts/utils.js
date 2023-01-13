'use strict'

// @ts-check

import { parse } from 'node:path'
import { readdir } from 'node:fs/promises'

/**
 * 
 * @param {string} basename 
 * @returns {string}
 */
export function getFileNameWithoutExtention(basename) {
  return parse(basename).name
}

/**
 * 
 * @param {string} dir
 * @returns {Promise<{basenames: string[], names: string[]}>}
 */
export async function loadDirFileNames(dir) {
  const basenames = await readdir(dir)
  const names = basenames.map(getFileNameWithoutExtention)

  return { basenames, names }
}
