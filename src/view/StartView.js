/**
 * The view for the start page of the application.
 */
class StartView {
  constructor () {
    this.startView = document.querySelector('#startPage')
    this.classicGamemode = document.querySelector('#classicMode')
    this.timedGamemode = document.querySelector('#timedMode')
  }

  /**
   * Add eventlisteneres to the gamemode buttons.
   *
   * @param {Function} callback - The callback to execute when a button is clicked.
   */
  addEventListenerToButtons (callback) {
    this.classicGamemode.addEventListener('click', callback)
    this.timedGamemode.addEventListener('click', callback)
  }

  hideStartView () {
    this.startView.style.display = 'none'
  }
}

export default StartView
