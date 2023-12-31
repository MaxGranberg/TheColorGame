import { ColorGenerator } from 'randomly-generate'

/**
 * Represents a randomly generated color in RGB format.
 */
class RandomColor {
  #rgbStringOfColor

  /**
   * Initializes a new instance of RandomColor class and generates a random rgb color string.
   */
  constructor () {
    this.colorGenerator = new ColorGenerator()
    this.#rgbStringOfColor = this.generateNewRgbString()
  }

  generateNewRgbString () {
    return this.colorGenerator.generateRandomRGBString()
  }

  updateRgbString () {
    this.#rgbStringOfColor = this.colorGenerator.generateRandomRGBString()
  }

  getRgbString () {
    return this.#rgbStringOfColor
  }
}

export default RandomColor
