const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = [];
  let add = [];
  const string = String(str);
  const addition = options.addition;
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';

  res.push(string);
  if (String(addition) !== 'undefined') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      add.push(String(addition));
    }
  }
  const addSeparated = add.join(additionSeparator);
  res.push(addSeparated);
  const item = res.join('');
  let result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(item);
  }
  return result.join(separator);
}

module.exports = {
  repeater
};
