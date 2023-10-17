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

    this.restartButton = document.querySelector('#restartButton')
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
   * @param {string} feedbackMessage - The message to present to the user.
   */
  displayFeedbackMessage (feedbackMessage) {
    this.feedbackMessage.textContent = feedbackMessage
  }

  /**
   * Displays a message when timer runs out.
   */
  showTimeoutFeedback () {
    this.displayFeedbackMessage('The time went out! Try again')
    this.showRestartButton()
  }

  /**
   * Displays a restart button.
   */
  showRestartButton () {
    this.restartButton.style.display = 'flex'
  }

  /**
   * Hides the restart button.
   */
  hideRestartButton () {
    this.restartButton.style.display = 'none'
  }
}
export default TimedGameView
