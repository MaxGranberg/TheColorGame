import GameController from './controller/GameController.js'
import GameView from './view/GameView.js'
import RandomColor from './model/RandomColor.js'
import ColorThemeView from './view/ColorThemeView.js'
import ColorThemeController from './controller/ColorThemeController.js'

const gameView = new GameView()
const model = new RandomColor()
const controller = new GameController(model, gameView)

const colorThemeView = new ColorThemeView()
const colorThemeController = new ColorThemeController(model, colorThemeView)

controller.startGame()
