import RandomColor from '../model/RandomColor.js'
import GameView from '../view/GameView.js'
import StartView from '../view/StartView.js'
import GameController from './GameController.js'
import TimedGameController from './TimedGameController.js'
import TimedGameView from '../view/TimedGameView.js'

/**
 * This is the controller for the start page of the application.
 */
class StartController {
  /**
   * Initializes a new instance of the StartController class.
   *
   * @param {RandomColor} model - The RandomColor model for the application.
   * @param {StartView} view - The start view for the application.
   */
  constructor (model, view) {
    this.randomColormodel = model
    this.startView = view

    this.startView.addEventListenerToButtons(this.handleGamemodeChoice.bind(this))
  }

  /**
   * Handle when user chooses a gamemode to play.
   *
   * @param {Event} event - A click event.
   */
  handleGamemodeChoice (event) {
    this.startView.hideStartView()

    const classicGamemode = this.startView.classicGamemode
    const timedGamemode = this.startView.timedGamemode

    if (event.target === classicGamemode) {
      this.handleClassicGamemodeChoice()
    } else if (event.target === timedGamemode) {
      this.handleTimedGamemodeChoice()
    }
  }

  handleClassicGamemodeChoice () {
    const gameView = new GameView()
    const classicGameController = new GameController(this.randomColormodel, gameView)
    classicGameController.startGame()
  }

  handleTimedGamemodeChoice () {
    const timedGameView = new TimedGameView()
    const timedGameController = new TimedGameController(this.randomColormodel, timedGameView)
    timedGameController.startGame()
  }
}
export default StartController
