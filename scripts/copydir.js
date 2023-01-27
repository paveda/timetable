import { join } from 'node:path'
import { readdir, copyFile } from 'node:fs/promises'
import { existsSync, mkdirSync } from 'node:fs'

/**
 * 
 * @param {string} src 
 * @param {string} dest 
 * @returns {Promise<void>}
 */
export async function copydir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest)
  }

  const dir = await readdir(src)

  for (const basename of dir) {
    await copyFile(join(src, basename), join(dest, basename))
  }
}
