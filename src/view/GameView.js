/**
 * The view for the classic gamemode.
 */
class GameView {
  #score

  constructor () {
    this.#score = document.querySelector('#score')
    this.rgbStringToGuess = document.querySelector('#rgbStringToGuess')
    this.answerOptions = document.querySelectorAll('.option')
    this.feedbackMessage = document.querySelector('#feedback')
    this.bestScore = document.querySelector('#bestScore')
    this.restartButton = document.querySelector('#restartButton')

    this.#score.style.marginTop = '320px'

    this.backToStartButton = document.querySelector('#backToStart')
    this.backToStartButton.style.display = 'flex'
  }

  addEventListenerToBackToStartButton (callback) {
    this.backToStartButton.addEventListener('click', callback)
  }

  showStartPage () {
    document.querySelector('#startPage').style.display = 'flex'
    this.backToStartButton.style.display = 'none'
  }

  /**
   * Displays the RGB string that the user is supposed to guess.
   */
  displayRgbString (rgbString) {
    this.rgbStringToGuess.textContent = rgbString
  }

  updateAnswerOptionsColors (colors) {
    colors.forEach((color, index) => {
      this.answerOptions[index].style.backgroundColor = color
    })
  }

  /**
   * Add eventlisteneres to the answer options.
   *
   * @param {Function} callback - The callback to execute when an option is clicked.
   */
  addEventListenerToAnswers (callback) {
    this.answerOptions.forEach(option => {
      option.addEventListener('click', callback)
    })
  }

  updateCurrentScore (score) {
    this.#score.textContent = `Score: ${score}`
  }

  /**
   * Updates the best score for the user playing.
   */
  updateBestScore (score) {
    this.bestScore.textContent = `Your best score: ${score}`
  }

  displayFeedbackMessage (feedbackMessage) {
    this.feedbackMessage.textContent = feedbackMessage
  }

  showSuccessFeedback () {
    this.displayFeedbackMessage('Correct!')
  }

  showFailureFeedback () {
    this.displayFeedbackMessage('Wrong! Try again')
  }

  clearFeedbackMessage () {
    this.feedbackMessage.textContent = ''
  }

  showRestartButton () {
    this.restartButton.style.display = 'flex'
  }

  hideRestartButton () {
    this.restartButton.style.display = 'none'
  }
}

export default GameView
