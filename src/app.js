// @ts-check

/** @type {HTMLDivElement} */
const timeline = document.querySelector('.timeline')
const gutter = document.querySelector('.gutter__list')

const MIN_TIME = parseInt(timeline.dataset.from)
const MAX_TIME = parseInt(timeline.dataset.to)

const date = new Date(Date.now())
const hours = date.getHours()
const minutes = date.getMinutes()

const gutterClientRect = gutter.getBoundingClientRect()

// TODO: Слишком много магических цифр

const pixelsInMinute = gutterClientRect.height / (MAX_TIME - MIN_TIME) / 60;

if (hours > MIN_TIME && hours < MAX_TIME) {
  let position = ((hours * 60) - (MIN_TIME * 60) + minutes) * pixelsInMinute + 24 + 36

  timeline.style.top = position + 'px'

  setInterval(() => {
    position = position + pixelsInMinute / 60
    timeline.style.top = position + 'px'
  }, 1000 * 60)
}
const WEEK_DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

function getTodaysName() {
  const today = new Date(Date.now()).getDay()

  return WEEK_DAYS.at(today)
}

const today = getTodaysName()

const element = document.querySelector('.' + today)
if (element) {
  element.classList.add('day_active')

  const dayAgenda = element.querySelector('.day__agenda')
  
  if (dayAgenda) {
    const trect = timeline.getBoundingClientRect()

    for (const child of dayAgenda.children) {
      /** @type {DOMRect} */
      const rect = child.getBoundingClientRect()
      if (rect.top < trect.top && rect.bottom > trect.bottom) {
        child.classList.add('event_active')
      }
    }
  }
}
