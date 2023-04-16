const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  options.separator ? "" : (options.separator = "+");
  options.additionSeparator ? "" : (options.additionSeparator = "|");
  options.repeatTimes ? "" : (options.repeatTimes = 1);
  options.additionRepeatTimes ? "" : (options.additionRepeatTimes = 1);
  options.addition !== undefined ? "" : (options.addition = "");
  options.addition = String(options.addition);
  let newArr = [];
  let res = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    newArr.push(options.addition);
  }
  for (let i = 1; i <= options.repeatTimes; i++) {
    res.push(str + newArr.join(options.additionSeparator));
  }
  return res.join(options.separator);
}

module.exports = {
  repeater,
};
