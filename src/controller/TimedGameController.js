import GameController from './GameController.js'
import RandomColor from '../model/RandomColor.js'
import TimedGameView from '../view/TimedGameView.js'
import { NumberGenerator } from 'randomly-generate'

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
    this.numberGenerator = new NumberGenerator()

    this.localStorageKey = 'timedBestScore'
    this.bestScore = localStorage.getItem(this.localStorageKey) || 0
    this.updateBestScore(this.score)

    this.timedGameView = view
  }

  /**
   * Starts the game with its corresponding timer.
   */
  startGame () {
    super.startGame()
    this.timeLimit = this.numberGenerator.generateRandomNumber(5, 10)
    this.startTimer()
  }

  /**
   * Starts a new round after the user has picked an answer.
   */
  startNewRound () {
    super.startNewRound()
    this.startTimer()
  }

  /**
   * Starts the timer for the game.
   */
  startTimer () {
    if (this.timer) {
      clearInterval(this.timer) // If a timer already exists, clear it.
    }

    this.currentTime = this.timeLimit
    this.timedGameView.updateTimer(this.currentTime)

    this.timer = setInterval(() => {
      this.currentTime--
      this.timedGameView.updateTimer(this.currentTime)
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
    this.timedGameView.showTimeoutFeedback()
    this.timedGameView.showRestartButton()
    this.timedGameView.answerOptions.forEach(option => {
      option.removeEventListener('click', this.boundHandleClickOnOptions)
    })
  }

  /**
   * Handle what happends when user clicks on an answer option.
   *
   * @param {Event} event - A click event.
   */
  handleClickOnOptions (event) {
    clearInterval(this.timer)
    super.handleClickOnOptions(event)
  }

  /**
   * Destroys the game session when the user goes back to the start page.
   */
  destroyGameSession () {
    super.destroyGameSession()
    clearInterval(this.timer)
    this.timedGameView.timer.remove()
  }
}
export default TimedGameController
