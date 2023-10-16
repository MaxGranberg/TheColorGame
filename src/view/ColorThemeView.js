import RandomColor from '../model/RandomColor.js'

/**
 *
 */
class ColorThemeView {
  /**
   * Initializes a new instance of the ColorThemeView class.
   *
   * @param {RandomColor} randomColorModel - The model.
   */
  constructor (randomColorModel) {
    this.navbar = document.querySelector('#navbar')
    this.changeColorButton = document.querySelector('#changeColorBtn')
    this.randomColorModel = randomColorModel

    this.changeColorButton.addEventListener('click', () => { this.changeNavbarColor() })
  }

  /**
   * Changes the color of the navbar to a random one.
   */
  changeNavbarColor () {
    const newColor = this.randomColorModel.generateRandomRgbColor()
    this.navbar.style.backgroundColor = newColor
  }
}
export default ColorThemeView
