'use strict'

// @ts-check

import { join, parse } from 'node:path'
import { readdir } from 'node:fs/promises'

/**
 * @template T
 * @param {string} path 
 * @param {(path: string) => Promise<T>} loader 
 * @returns {Promise<Map<string, T>>}
 */
export async function loaddir(path, loader) {
  const dir = await readdir(path, 'utf-8')

  /** @type {Map<string, T>} */
  const data = new Map()

  for (const basename of dir) {
    const name = parse(basename).name
    const file = await loader(join(path, basename))

    data.set(name, file)
  }

  return data
}
