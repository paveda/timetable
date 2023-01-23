import { readFile } from 'node:fs/promises'

/**
 * 
 * @param {string} path 
 * @returns {Promise<string>}
 */
export const loadText = async (path) => readFile(path, 'utf-8')

/**
 * @template T
 * @param {string} path 
 * @returns {Promise<T>}
 */
export const loadModuleDefaultExport = async (path) => (await import(path)).default
