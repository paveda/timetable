// @ts-check

import { nunjucks } from '../config/nunjucks.js'
import { TEMPLATE_FILE_EXT } from '../config/constants.js'
import { formatHtml } from './formatHtml.js'

/**
 * 
 * @param {string} templateName 
 * @param {object} context 
 * @returns {Promise<string>}
 */
export async function render(templateName, context) {
  const rendered = nunjucks.render(templateName + TEMPLATE_FILE_EXT, context)
  return formatHtml(rendered)
}
