/**
 *
 */
class GameView {
  /**
   * Initializes a new instance of the GameView class.
   */
  constructor () {
    this.rgbValueToGuess = document.querySelector('#rgbValueToGuess')
    this.answerOptions = document.querySelectorAll('.option')
    this.feedbackMessage = document.querySelector('#feedback')
  }

  /**
   * Displays the RGB string that the user is supposed to guess.
   *
   * @param {string} rgbString - The RGB string the user will guess on.
   */
  displayRgbString (rgbString) {
    this.rgbValueToGuess.textContent = rgbString
  }

  /**
   * Updates the colors/answer options that a user can choose from.
   *
   * @param {Array} colors - An array of RGB color strings.
   */
  updateAnswerOptionColors (colors) {
    colors.forEach((color, index) => {
      this.answerOptions[index].style.backgroundColor = color
    })
  }

  /**
   * Add eventlisteneres to the options.
   *
   * @param {Function} callback - The callback to execute when an option is clicked.
   */
  addEventListenerToOptions (callback) {
    this.answerOptions.forEach(option => {
      option.addEventListener('click', callback)
    })
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
   * Displays a message when user guesses correctly.
   */
  showSuccessFeedback () {
    this.displayFeedbackMessage('Correct!')
  }

  /**
   * Displays feeback if user guess wrong.
   */
  showFailureFeedback () {
    this.displayFeedbackMessage('Wrong!')
  }
}

export default GameView
