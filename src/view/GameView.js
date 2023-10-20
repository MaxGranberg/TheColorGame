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
    this.restartButton = document.querySelector('#restartButton')

    this.score.style.marginTop = '320px'

    this.backToStartButton = document.querySelector('#backToStart')
    this.backToStartButton.style.display = 'flex'
    this.backToStartButton.addEventListener('click', () => {
      this.goBackToStartPage()
      this.backToStartButton.style.display = 'none'
    })
  }

  /**
   * Show the start page.
   */
  showStartPage () {
    document.querySelector('#startPage').style.display = 'flex'
  }

  /**
   * Dispatch a custom event when user wants to go back to the start page.
   */
  goBackToStartPage () {
    const event = new Event('backToStartRequest')
    this.backToStartButton.dispatchEvent(event)
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
    this.displayFeedbackMessage('Wrong! Try again')
  }

  /**
   * Clears the feedback message.
   */
  clearFeedbackMessage () {
    this.feedbackMessage.textContent = ''
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

export default GameView
