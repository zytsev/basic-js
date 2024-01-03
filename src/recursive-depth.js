const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {

  }
  calculateDepth(arr) {
    if (arr.length === 0) {
      arr = [1]//в пустой массив добавляем 1 чтобы срабатывал мап
    }
    return Array.isArray(arr) ? Math.max(...arr.map(item => this.calculateDepth(item))) + 1 : 0;
  }//глубина определяется по маскисмальной глубине подмассивов (сравнивая их между собой)
}

module.exports = {
  DepthCalculator
};
