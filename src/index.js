import GameController from './controller/GameController.js'
import GameView from './view/GameView.js'
import RandomColor from './model/RandomColor.js'

const view = new GameView()
const model = new RandomColor()
const controller = new GameController(view, model)

controller.startGame()
