import { format } from 'prettier'

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
