// @ts-check

/** @type {import('../../src/types').WeekData} */
export default {
  timeRange: [7, 23],
  days: {
    monday: {
      title: 'Понедельник',
      agenda: [
        {
          name: 'Чтение',
          start: 7,
          end: 8,
          color: 'violet',
        },
        {
          name: 'Зарядка',
          start: 8,
          end: 9,
          color: 'indigo'
        },
        {
          name: 'web',
          start: 9,
          end: 13,
          color: 'yellow'
        },
        {
          name: 'english',
          start: 14,
          end: 18,
          color: 'red'
        },
        {
          name: 'Тренировка',
          start: 18,
          end: 19,
          color: 'blue'
        },
        {
          name: 'Рисование',
          start: 19,
          end: 21,
          color: 'teal'
        },
        {
          name: 'Чтение',
          start: 21,
          end: 23,
          color: 'violet'
        },
      ]
    },
    tuesday: {
      title: 'Вторник',
      agenda: [],
    },
    wednesday: {
      title: 'Среда',
      agenda: [],
    },
    thursday: {
      title: 'Черверг',
      agenda: [],
    },
    friday: {
      title: 'Пятница',
      agenda: [],
    },
    suturday: {
      title: 'Суббота',
      agenda: [],
    },
    sunday: {
      title: 'Воскресенье',
      agenda: [],
    },
  }
}