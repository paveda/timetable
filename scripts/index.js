'use strict'

// @ts-check

import { parse } from 'node:path'
import { readdir } from 'node:fs/promises'
import { format } from 'prettier'
export { PATH, TEMPLATE_FILE_EXT } from './constants.js'
export { loadTemplates } from './loadTemplates.js'
export { loadModulesFromDir } from './loadData.js'

/**
 * 
 * @param {string} src 
 * @returns {string}
 */
export function formatHtml(src) {
  return format(src, {
    parser: 'html',
  })
}

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

  return { basenames, names, fullPath }
}
