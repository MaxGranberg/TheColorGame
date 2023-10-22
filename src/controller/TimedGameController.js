import GameController from './GameController.js'
import RandomColor from '../model/RandomColor.js'
import TimedGameView from '../view/TimedGameView.js'
import { NumberGenerator } from 'randomly-generate'

class TimedGameController extends GameController {
  #MIN_TIME_LIMIT = 5
  #MAX_TIME_LIMIT = 10
  #timer
  #currentTime
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

  startGame () {
    super.startGame()
    
    this.timeLimit = this.numberGenerator.generateRandomNumber(this.#MIN_TIME_LIMIT, this.#MAX_TIME_LIMIT)
    this.startTimer()
  }

  /**
   * Need to start a new round after the user has picked an answer.
   */
  startNewRound () {
    super.startNewRound()
    this.startTimer()
  }

  startTimer () {
    if (this.#timer) {
      clearInterval(this.#timer) // If a timer already exists, need to clear it.
    }

    this.#currentTime = this.timeLimit
    this.timedGameView.updateTimerElement(this.#currentTime)

    this.#timer = setInterval(() => {
      this.#currentTime--
      this.timedGameView.updateTimerElement(this.#currentTime)
      if (this.#currentTime <= 0) {
        clearInterval(this.#timer)
        this.handleTimeout()
      }
    }, 1000)
  }

  handleTimeout () {
    this.timedGameView.displayTimeoutMessage()
    this.timedGameView.showRestartButton()
    this.timedGameView.answerOptions.forEach(option => {
      option.removeEventListener('click', this.boundHandleClickOnAnswers)
    })
  }

  handleClickOnAnswers (event) {
    clearInterval(this.#timer)
    super.handleClickOnAnswers(event)
  }

  destroyGameSession () {
    super.destroyGameSession()
    clearInterval(this.#timer)
    this.timedGameView.removeTimerElement()
  }
}
export default TimedGameController
