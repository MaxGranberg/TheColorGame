import GameView from '../view/GameView.js'
import RandomColor from '../model/RandomColor.js'

/**
 *
 */
export default class GameController {
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
    const rgbStringToGuess = this.randomColorModel.rgbString
    this.gameView.displayRgbString(rgbStringToGuess)
    // TODO: set up color options here, or atleast call the function that does it.
  }

  /**
   * Handle when user clicks on an answer option.
   *
   * @param {Event} event - A click event
   */
  handleClickOnOptions (event) {
    const userChoice = event.target.style.backgroundColor
    if (userChoice === this.randomColorModel.rgbString) {
      this.gameView.showSuccessFeedback()
      // TODO: handle correct guess, proceed to next round.
    } else {
      this.gameView.showFailureFeedback()
      // TODO: handle wrong guess, restart game/show score
    }
  }
}
