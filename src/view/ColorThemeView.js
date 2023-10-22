class ColorThemeView {

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
  addColorChangeEventListener (callback) {
    this.changeColorButton.addEventListener('click', callback)
  }

  updateColorTheme (newColor) {
    this.changeGamemodeButtonColor(newColor)
    this.changeNavbarColor(newColor)
    this.changeRgbStringColor(newColor)
    this.changeRestartButtonColor(newColor)
  }

  changeGamemodeButtonColor (newColor) {
    this.gamemodeButtons.forEach(button => {
      button.style.backgroundColor = newColor
    })
  }

  changeNavbarColor (newColor) {
    this.navbar.style.backgroundColor = newColor
  }

  changeRgbStringColor (newColor) {
    this.rgbStringToGuess.style.color = newColor
  }

  changeRestartButtonColor (newColor) {
    this.restartButton.style.backgroundColor = newColor
  }
}
export default ColorThemeView
