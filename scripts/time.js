// @ts-check

const rx = /(?<h>\d+)h(?<m>\d+)m/s

/**
 * 
 * @param {import('../src/types').TimeStr} time 
 * @returns {{ h: number, m: number }}
 */
function parseTime(time) {
  const result = rx.exec(time)

  if (result === null) {
    throw new Error()
  }

  const { groups } = result

  if (groups && 'h' in groups && 'm' in groups) {
    return {
        h: parseInt(groups.h),
        m: parseInt(groups.m),
      }
  }

  throw new Error()
}

/**
 * 
 * @param {{ h: number, m: number }} time 
 */
function toMinutes(time) {
  return time.h * 60 + time.m
}

/**
 * 
 * @param {import('../src/types').TimeStr | number} time 
 */
export function getTimeInMinutes(time) {
  if (typeof time === 'number') return time * 60

  return toMinutes(parseTime(time))
}
