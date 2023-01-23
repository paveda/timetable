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
