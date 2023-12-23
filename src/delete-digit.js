const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numToString = n.toString();
  let maxNum = 0;
  for (let i = 0; i < numToString.length; i++) {
    let temp = numToString.slice(0, i) + numToString.slice(i + 1);
    maxNum = Math.max(maxNum, +temp);
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
