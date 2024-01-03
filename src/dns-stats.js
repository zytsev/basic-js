const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let Obj = [];
  let res = {}
  for (item of domains) {
    let arr = [];
    let accum = ''
    arr = item.split('.')
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      accum += `.${arr[i]}`;
      Obj.push(accum);
    }
  }
  for (let key of Obj) {
    let value = 0;
    for (elem of Obj) {
      if (key === elem) {
        value++;
      }
    }
    res[key] = value;
  }
  return res;
}

module.exports = {
  getDNSStats
};
