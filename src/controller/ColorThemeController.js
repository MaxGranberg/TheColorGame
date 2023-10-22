import RandomColor from '../model/RandomColor.js'
import ColorThemeView from '../view/ColorThemeView.js'

/**
 *
 */
class ColorThemeController {
  /**
   * Initializes a new instance of the ColorThemeController class.
   *
   * @param {RandomColor} model - The model.
   * @param {ColorThemeView} view - The view.
   */
  constructor (model, view) {
    this.model = model
    this.view = view

    this.view.addColorChangeEventListener(this.handleColorChangeRequest.bind(this))
  }

  /**
   * Handle when user clicks on the change color button.
   *
   */
  handleColorChangeRequest () {
    const newColor = this.model.generateNewRgbString()
    this.view.updateColorTheme(newColor)
  }
}
export default ColorThemeController
