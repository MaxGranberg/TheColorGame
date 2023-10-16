/**
 *
 */
class GameView {
  /**
   * Initializes a new instance of the GameView class.
   */
  constructor () {
    this.score = document.querySelector('#score')
    this.rgbStringToGuess = document.querySelector('#rgbStringToGuess')
    this.answerOptions = document.querySelectorAll('.option')
    this.feedbackMessage = document.querySelector('#feedback')
    this.bestScore = document.querySelector('#bestScore')
  }

  /**
   * Displays the RGB string that the user is supposed to guess.
   *
   * @param {string} rgbString - The RGB string the user will guess on.
   */
  displayRgbString (rgbString) {
    this.rgbStringToGuess.textContent = rgbString
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
   * Updates the current score for the user.
   *
   * @param {number} score - How many correct guesses the user currently has.
   */
  updateScore (score) {
    this.score.textContent = `Score: ${score}`
  }

  /**
   * Updates the best score for the user.
   *
   * @param {number} score - How many correct guesses the user has had as most.
   */
  updateBestScore (score) {
    this.bestScore.textContent = `Your best score: ${score}`
  }

  /**
   * Displays a feedback message to the user based on its guess.
   *
   * @param {string} feedbackMessage - The message to present to the user.
   */
  displayFeedbackMessage (feedbackMessage) {
    this.feedbackMessage.textContent = feedbackMessage
    setTimeout(() => { this.clearFeedbackMessage() }, 2000)
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

  /**
   * Clears the feedback message.
   */
  clearFeedbackMessage () {
    this.feedbackMessage.textContent = ''
  }
}

export default GameView
