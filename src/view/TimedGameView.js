import GameView from './GameView.js'

/**
 * The view for the timed gamemode who extends the classic gamemode view. 
 */
class TimedGameView extends GameView {
  #timerElement
  #score

  constructor () {
    super()
    this.#timerElement = document.createElement('p')
    this.#timerElement.setAttribute('id', 'timer')
    document.querySelector('#app').insertBefore(this.#timerElement, this.rgbStringToGuess)

    this.#score = document.querySelector('#score')
    this.#score.style.marginTop = '370px'
  }

  updateTimerElement (currentTime) {
    this.#timerElement.textContent = `Time left: ${currentTime}`
  }

  removeTimerElement () {
    this.#timerElement.remove()
  }

  displayTimeoutMessage () {
    this.feedbackMessage.textContent = 'The time went out! Try again'
  }
}
export default TimedGameView
