// @ts-check

/** @type {import('../../src/types').WeekData} */
export default {
  timeRange: [7, 20],
  days: {
    monday: {
      title: 'Monday',
      agenda: [
        { name: 'Training', start: '8h20m', end: '10h20m', color: 'grape' },
        { name: 'Work', start: '11h45m', end: '19h30m', color: 'grape' },
      ]
    },
    friday: {
      title: 'Friday',
      agenda: [
        { name: 'Work', start: '11h45m', end: '19h30m', color: 'blue' },
      ]
    },
  }
}