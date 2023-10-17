
import RandomColor from './model/RandomColor.js'
import ColorThemeView from './view/ColorThemeView.js'
import ColorThemeController from './controller/ColorThemeController.js'
import StartController from './controller/StartController.js'
import StartView from './view/StartView.js'

const model = new RandomColor()
const view = new StartView()
const startController = new StartController(model, view)

const colorThemeView = new ColorThemeView()
const colorThemeController = new ColorThemeController(model, colorThemeView)
