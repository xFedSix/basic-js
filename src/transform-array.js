const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  try {
    let res = [];
    if (arr.length === 0) {
      return res;
    }
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] !== "--double-next" &&
        arr[i] !== "--double-prev" &&
        arr[i] !== "--discard-next" &&
        arr[i] !== "--discard-prev"
      ) {
        res.push(arr[i]);
      } else if (arr[i] === "--discard-next") {
        i++;
      } else if (
        arr[i] === "--discard-prev" &&
        arr[i - 1] &&
        arr[i - 2] !== "--discard-next"
      ) {
        res.pop(arr[i - 1]);
      } else if (arr[i] === "--double-next" && arr[i + 1]) {
        res.push(arr[i + 1]);
      } else if (
        arr[i] === "--double-prev" &&
        arr[i - 1] &&
        arr[i - 2] !== "--discard-next"
      ) {
        res.push(arr[i - 1]);
      }
    }
    return res;
  } catch {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
