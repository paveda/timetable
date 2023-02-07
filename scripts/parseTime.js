const rx = /(\d+)h(\d+)m/s

/**
 * 
 * @param {import('../src/types').TimeStr} time 
 */
export function parseTime(time) {
  if (!rx.test(time)) {
    throw new Error('')
  }

  const [, h, m] = rx.exec(time)

  return { h, m }
}
