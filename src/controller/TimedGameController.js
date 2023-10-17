import GameController from './GameController.js'
import RandomColor from '../model/RandomColor.js'
import TimedGameView from '../view/TimedGameView.js'

/**
 *
 */
class TimedGameController extends GameController {
  /**
   * Initializes a new instance of the GameController class.
   *
   * @param {RandomColor} model - The model instance.
   * @param {TimedGameView} view - The view instance.
   */
  constructor (model, view) {
    super(model, view)
    this.timeLimit = 10 // TODO: change this to use my module with NumberGenerator?
  }

  /**
   * Starts the game with its corresponding timer.
   */
  startGame () {
    super.startGame()
    this.startTimer()
  }

  /**
   * Starts the timer for the game.
   */
  startTimer () {
    this.currentTime = this.timeLimit
    this.gameView.updateTimer(this.currentTime)

    this.timer = setInterval(() => {
      this.currentTime--
      this.gameView.updateTimer(this.currentTime)
      if (this.currentTime <= 0) {
        clearInterval(this.timer)
        this.handleTimeout()
      }
    }, 1000)
  }

  /**
   * Handle what happends when the timer runs out.
   */
  handleTimeout () {
    this.gameView.showTimeoutFeedback()
    this.score = 0
    this.updateScore()
    this.startNewRound()
  }

  /**
   * Handle what happends when user clicks on an answer option.
   *
   * @param {Event} event - A click event.
   */
  handleClickOnOptions (event) {
    super.handleClickOnOptions(event)
    clearInterval(this.timer)
  }
}
export default TimedGameController
