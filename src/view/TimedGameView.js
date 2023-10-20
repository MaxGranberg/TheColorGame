import GameView from './GameView.js'

/**
 *
 */
class TimedGameView extends GameView {
  /**
   * Initializes a new instance of the TimedGameView class.
   */
  constructor () {
    super()
    this.timer = document.createElement('p')
    this.timer.setAttribute('id', 'timer')
    document.querySelector('#app').insertBefore(this.timer, this.rgbStringToGuess)

    this.score = document.querySelector('#score')
    this.score.style.marginTop = '370px'
  }

  /**
   * Updates the timer element.
   *
   * @param {number} currentTime - The time left of the timer.
   */
  updateTimer (currentTime) {
    this.timer.textContent = `Time left: ${currentTime}`
  }

  /**
   * Displays a feedback message to the user based on its guess.
   *
   */
  displayTimeoutMessage () {
    this.feedbackMessage.textContent = 'The time went out! Try again'
  }

  /**
   * Displays a message when timer runs out.
   */
  showTimeoutFeedback () {
    this.displayTimeoutMessage()
  }
}
export default TimedGameView
