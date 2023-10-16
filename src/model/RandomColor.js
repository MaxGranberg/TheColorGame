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
   * Get the answer options for the game, maybe move this to controller?
   *
   * @returns {Array} - An array of rgb strings.
   */
  getAnswerOptions () {
    const answerOption1 = this.colorGenerator.generateRandomRGBColor()
    const answerOption2 = this.colorGenerator.generateRandomRGBColor()
    const answerOption3 = this.rgbStringOfColor
    return [answerOption1, answerOption2, answerOption3]
  }
}

export default RandomColor
