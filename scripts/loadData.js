'use strict'

// @ts-check

import { readdir } from 'node:fs/promises'
import { PATH } from './constants.js'
import { getFileNameWithoutExtention } from './index.js'

/**
 * 
 * @param {string} dir path to dir
 * @returns {Promise<Map<string, string>>}
 */
export async function loadModulesFromDir(dir) {
  /** @type {Map<string, string>} */
  const data = new Map()


  for () {

  }
  const module = await import()
  const name = getFileNameWithoutExtention(src)

  data.set(name, module.default)

  return data
}
