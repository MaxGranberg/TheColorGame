import { ColorGenerator } from 'randomly-generate'

/**
 * Represents a randomly generated color in RGB format.
 */
class RandomColor {
  /**
   * Initializes a new instance of RandomColor class and sets a random RGB value.
   */
  constructor () {
    this.colorGenerator = new ColorGenerator()
    this.rgbString = this.colorGenerator.generateRandomRGBColor()
  }
}

export default RandomColor
