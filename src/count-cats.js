const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let catsNum = 0;
  if (matrix.length == 0) {
    return catsNum;
  }
  let columsCount = matrix[0].length;
  for (let i = 0; i < columsCount; i++) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][i] == "^^") {
        catsNum++;
      }
    }
  }
  return catsNum;
}

module.exports = {
  countCats,
};
