const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  debugger;
  let array = ("" + n).split("").map(Number);
  let res = 0;

  console.log(array);
  for (let i = 0; i < array.length; i++) {
    res += array[i];
    console.log(array[i]);
    if (res > 9) {
      let array2 = ("" + n).split("").map(Number);
      console.log(array2);
      for (let j = 0; j < array2.length; j++) {
        res = 0;
        res += array2[j];
      }
    }
  }
  return res;
}
getSumOfDigits(91);
module.exports = {
  getSumOfDigits,
};
