import './nunjucks.js'

const gutter = document.querySelector('.gutter')
const week = document.querySelector('.week')
/** @type {HTMLDivElement} */
const timeline = document.querySelector('.timeline')

const date = new Date(Date.now())
const hours = date.getHours()
const minutes = date.getMinutes()

const minuteInPixel = gutter.getBoundingClientRect().height / 16 / 60;

if (hours > 7 && hours < 23) {
  let position = ((hours * 60) - (7 * 60) + minutes) * minuteInPixel + 24
  timeline.style.top = position + 'px'

  setInterval(() => {
    position = position + minuteInPixel / 60
    timeline.style.top = position + 'px'
  }, 1000)
}

gutter.innerHTML = nunjucks.renderString(
  gutter.innerHTML,
  {
    hours: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  }
)

week.innerHTML = nunjucks.renderString(
  week.innerHTML,
  {
    week: {
      monday: {
        title: 'Понедельник',
        agenda: [
          {
            title: 'Чтение',
            start: 7,
            end: 8,
            color: 'mediumpurple'
          },
          {
            title: 'Тренировка',
            start: 8,
            end: 9,
            color: 'deepskyblue'
          },
          {
            title: 'Web Dev',
            start: 9,
            end: 13,
            color: 'gold'
          },
          {
            title: 'English',
            start: 14,
            end: 18,
            color: 'lightcoral'
          },
          {
            title: 'Тренировка',
            start: 18,
            end: 19,
            color: 'deepskyblue'
          },
          {
            title: 'Рисование',
            start: 19,
            end: 21,
            color: 'mediumturquoise'
          },
          {
            title: 'Чтение',
            start: 21,
            end: 23,
            color: 'mediumpurple'
          },
        ]
      },
      tuesday: {
        title: 'Вторник',
      },
      wednesday: {
        title: 'Среда',
      },
      thursday: {
        title: 'Черверг',
      },
      friday: {
        title: 'Пятница'
      },
      suturday: {
        title: 'Суббота',
      },
      sunday: {
        title: 'Воскресенье',
      },
    }
  }
)