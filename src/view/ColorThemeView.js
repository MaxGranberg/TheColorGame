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
    this.rgbStringToGuess = document.querySelector('#rgbStringToGuess')
    this.randomColorModel = randomColorModel

    this.changeColorButton.addEventListener('click', () => { this.changeColorTheme() })
  }

  /**
   * Changes the color theme of the whole appication.
   */
  changeColorTheme () {
    const newColor = this.randomColorModel.generateRandomRgbColor()
    this.changeNavbarColor(newColor)
    this.changeRgbStringColor(newColor)
  }

  /**
   * Changes the color of the navbar to a random one.
   *
   * @param {string} newColor - The color to change to.
   */
  changeNavbarColor (newColor) {
    this.navbar.style.backgroundColor = newColor
  }

  /**
   * Changes the color of the navbar to a random one.
   *
   * @param {string} newColor - The color to change to.
   */
  changeRgbStringColor (newColor) {
    this.rgbStringToGuess.style.color = newColor
  }
}
export default ColorThemeView
