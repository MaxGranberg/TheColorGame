import GameView from '../view/GameView.js'
import RandomColor from '../model/RandomColor.js'

/**
 *
 */
export default class GameController {
  rgbStringToGuess
  /**
   * Initializes a new instance of the GameController class.
   *
   * @param {GameView} view - The view instance.
   * @param {RandomColor} model - The model instance.
   */
  constructor (view, model) {
    this.gameView = view
    this.randomColorModel = model

    this.score = 0

    this.gameView.addEventListenerToOptions(this.handleClickOnOptions.bind(this))
  }

  /**
   * Start the game by showing rgb string to guess.
   */
  startGame () {
    this.rgbStringToGuess = this.randomColorModel.getRgbString()
    this.gameView.displayRgbString(this.rgbStringToGuess)

    let answerOptions = this.randomColorModel.getAnswerOptions()
    answerOptions = this.shuffleAnswerOptions(answerOptions)
    this.gameView.updateAnswerOptionColors(answerOptions)
  }

  /**
   * Shuffle the answer options so they aren't in the same order every round.
   * Uses the Fisher-Yates sorting algorithm.
   *
   * @param {Array} options - An array of the answer options as rgb strings.
   * @returns {Array} options - A shuffled version of the array.
   */
  shuffleAnswerOptions (options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]]
    }
    return options
  }

  /**
   * Handle when user clicks on an answer option.
   *
   * @param {Event} event - A click event
   */
  handleClickOnOptions (event) {
    const userChoice = event.target.style.backgroundColor
    if (userChoice.replace(/\s/g, '') === this.rgbStringToGuess) { // TODO: Probably fix module so it adds whitespaces to the rgb strings!
      this.gameView.showSuccessFeedback()
      this.score++
    } else {
      this.gameView.showFailureFeedback()
      this.score = 0
    }

    this.updateScore()

    setTimeout(() => {
      this.startNewRound()
    }, 1000)
  }

  /**
   * Updates the users score.
   */
  updateScore () {
    this.gameView.updateScore(this.score)
  }

  /**
   * Starts a new round by generating a new rgb string to guess.
   */
  startNewRound () {
    this.randomColorModel.generateNewRgbString()
    this.startGame()
  }
}
