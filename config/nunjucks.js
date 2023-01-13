'use strict'

// @ts-check

import nunjucks from 'nunjucks'
import { TEMPLATES_DIR } from './constants.js'

nunjucks.configure(TEMPLATES_DIR, {
  autoescape: true,
})

export { nunjucks }