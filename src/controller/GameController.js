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

    this.gameView.addEventListenerToOptions(this.handleClickOnOptions.bind(this))
  }

  /**
   * Start the game by showing rgb string to guess.
   */
  startGame () {
    this.rgbStringToGuess = this.randomColorModel.getRgbString()
    this.gameView.displayRgbString(this.rgbStringToGuess)

    const answerOptions = this.randomColorModel.getAnswerOptions()
    this.gameView.updateAnswerOptionColors(answerOptions)
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
      // TODO: handle correct guess, proceed to next round.
    } else {
      this.gameView.showFailureFeedback()
      // TODO: handle wrong guess, restart game/show score
    }
  }
}
