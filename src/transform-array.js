const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  if (arr.length === 0) {
    return arr;
  }
  let res = arr.reduce((accum, item, index, array) => {
    accum.push(item);
    if (item === '--discard-next') {
      accum.pop();
      array.splice(index + 1, 1, 'x')
    } else if (item === '--discard-prev') {
      accum.pop();
      accum.pop();
    } else if (item === '--double-next') {
      accum.pop();
      if (array[index + 1]) { accum.push(array[index + 1]) };
    } else if (item === '--double-prev') {
      accum.pop();
      if (accum[accum.length - 1] === 'x') {
        accum.pop();
      } else {
        if (accum[accum.length - 1]) { accum.push(accum[accum.length - 1]) }
      }
    }
    return accum;
  }, []);
  return res;
}

module.exports = {
  transform
};
