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
    this.gamemodeButtons = document.querySelectorAll('.gamemodeButton')
    this.restartButton = document.querySelector('#restartButton')
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
    this.changeGamemodeButtonColor(newColor)
    this.changeNavbarColor(newColor)
    this.changeRgbStringColor(newColor)
    this.changeRestartButtonColor(newColor)
  }

  /**
   * Changes the color of the gamemode buttons to a random one.
   *
   * @param {string} newColor - The color to change to.
   */
  changeGamemodeButtonColor (newColor) {
    this.gamemodeButtons.forEach(button => {
      button.style.backgroundColor = newColor
    })
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

  /**
   * Changes the color of the restart button to a random one.
   *
   * @param {string} newColor - The color to change to.
   */
  changeRestartButtonColor (newColor) {
    this.restartButton.style.backgroundColor = newColor
  }
}
export default ColorThemeView
