/** @type {HTMLDivElement} */
const timeline = document.querySelector('.timeline')
const gutter = document.querySelector('.gutter__list')

const RANGE_START = parseInt(timeline.dataset.from)
const RANGE_END = parseInt(timeline.dataset.to)

const date = new Date(Date.now())
const hours = date.getHours()
const minutes = date.getMinutes()

const gutterClientRect = gutter.getBoundingClientRect()

// TODO: Слишком много магических цифр

const pixelsInMinute = gutterClientRect.height / (RANGE_END - RANGE_START) / 60;

if (hours > RANGE_START && hours < RANGE_END) {
  let position = ((hours * 60) - (RANGE_START * 60) + minutes) * pixelsInMinute + 24 + 36

  timeline.style.top = position + 'px'

  setInterval(() => {
    position = position + pixelsInMinute / 60
    timeline.style.top = position + 'px'
  }, 1000 * 60)
}
