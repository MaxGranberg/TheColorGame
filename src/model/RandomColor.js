import { ColorGenerator } from 'randomly-generate'

/**
 * Represents a randomly generated color in RGB format.
 */
class RandomColor {
  rgbStringOfColor
  /**
   * Initializes a new instance of RandomColor class and generates a random rgb color string.
   */
  constructor () {
    this.colorGenerator = new ColorGenerator()
    this.rgbStringOfColor = this.colorGenerator.generateRandomRGBColor()
  }

  /**
   * Get the rgb string of the color generated.
   *
   * @returns {string} - the rgb string of the color.
   */
  getRgbString () {
    return this.rgbStringOfColor
  }

  /**
   * Generates a new rgb color string.
   */
  generateNewRgbString () {
    this.rgbStringOfColor = this.colorGenerator.generateRandomRGBColor()
  }

  /**
   * Generates a random rgb color string.
   *
   * @returns {string} - the rgb string of the color.
   */
  generateRandomRgbColor () {
    return this.colorGenerator.generateRandomRGBColor()
  }
}

export default RandomColor
