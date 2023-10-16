/**
 *
 */
class ColorThemeView {
  /**
   * Initializes a new instance of the ColorThemeView class.
   */
  constructor () {
    this.navbar = document.querySelector('#navbar')
    this.changeColorButton = document.querySelector('#changeColorBtn')
    this.rgbStringToGuess = document.querySelector('#rgbStringToGuess')
  }

  /**
   * Add eventlistener to the button for changing color theme.
   *
   * @param {Function} callback - The callback to execute when the button is clicked.
   */
  addEventListenerToButton (callback) {
    this.changeColorButton.addEventListener('click', callback)
  }

  /**
   * Changes the color theme of the whole appication.
   *
   * @param {string} newColor - The color to change to.
   */
  updateColorTheme (newColor) {
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
