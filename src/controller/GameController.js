import GameView from '../view/GameView.js'
import RandomColor from '../model/RandomColor.js'

/**
 *
 */
export default class GameController {
  #rgbStringToGuess
  /**
   * Initializes a new instance of the GameController class.
   *
   * @param {RandomColor} model - The model instance.
   * @param {GameView} view - The view instance.
   */
  constructor (model, view) {
    this.randomColorModel = model
    this.gameView = view

    this.score = 0
    this.#rgbStringToGuess = this.randomColorModel.getRgbString()

    this.gameView.addEventListenerToOptions(this.handleClickOnOptions.bind(this))
  }

  /**
   * Start the game by showing rgb string to guess.
   */
  startGame () {
    this.gameView.displayRgbString(this.#rgbStringToGuess)

    const answerOptions = this.generateAnswerOptions()
    this.gameView.updateAnswerOptionColors(answerOptions)
  }

  /**
   * Generate the answer options for the game.
   *
   * @returns {Array} - An array of rgb strings.
   */
  generateAnswerOptions () {
    const answerOption1 = this.randomColorModel.generateRgbString()
    const answerOption2 = this.randomColorModel.generateRgbString()
    const answerOption3 = this.#rgbStringToGuess
    const answerOptions = [answerOption1, answerOption2, answerOption3]

    return this.shuffleAnswerOptions(answerOptions)
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
    const userChoice = event.target.style.backgroundColor.replace(/\s/g, '') // TODO: Probably fix module so it adds whitespaces to the rgb strings instead!
    if (userChoice === this.#rgbStringToGuess) {
      this.handleCorrectGuess()
    } else {
      this.handleIncorrectGuess()
    }

    this.updateScore()
    this.startNewRound()
  }

  /**
   * Handles a correct guess from the user.
   */
  handleCorrectGuess () {
    this.gameView.showSuccessFeedback()
    this.score++
  }

  /**
   * Handles an incorrect guess from the user.
   */
  handleIncorrectGuess () {
    this.gameView.showFailureFeedback()
    this.score = 0
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
    this.randomColorModel.updateRgbString()
    this.startGame()
  }
}
