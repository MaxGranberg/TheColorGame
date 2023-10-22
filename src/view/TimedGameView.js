import GameView from './GameView.js'

/**
 *
 */
class TimedGameView extends GameView {
  #timerElement
  #score
  /**
   * Initializes a new instance of the TimedGameView class.
   */
  constructor () {
    super()
    this.#timerElement = document.createElement('p')
    this.#timerElement.setAttribute('id', 'timer')
    document.querySelector('#app').insertBefore(this.#timerElement, this.rgbStringToGuess)

    this.#score = document.querySelector('#score')
    this.#score.style.marginTop = '370px'
  }

  /**
   * Updates the timer element.
   *
   * @param {number} currentTime - The time left of the timer.
   */
  updateTimer (currentTime) {
    this.#timerElement.textContent = `Time left: ${currentTime}`
  }

  /**
   *
   */
  removeTimerElement () {
    this.#timerElement.remove()
  }

  /**
   * Displays a feedback message to the user based on its guess.
   *
   */
  displayTimeoutMessage () {
    this.feedbackMessage.textContent = 'The time went out! Try again'
  }
}
export default TimedGameView
