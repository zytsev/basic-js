const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const N = parseInt(sampleActivity);
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  const a = Math.log(MODERN_ACTIVITY / sampleActivity);
  const t = a / k;
  if (typeof sampleActivity !== 'string' || isNaN(N)) {
    return false;
  } if (sampleActivity > 15 || sampleActivity <= 0) {
    return false;
  } else {
    return Math.ceil(t) === NaN ? false : Math.ceil(t);
  }
}

module.exports = {
  dateSample
};
