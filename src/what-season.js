const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  try {
    if (date === undefined) {
      return "Unable to determine the time of year!";
    }
    if (Object.entries(date).length > 0) throw new Error("Invalid date!");
    if (date) {
      return (result =
        date.getMonth() > 1 && date.getMonth() < 5
          ? "spring"
          : date.getMonth() > 4 && date.getMonth() < 8
          ? "summer"
          : date.getMonth() > 7 && date.getMonth() < 11
          ? "fall"
          : "winter");
    }
  } catch (e) {
    if (Date.prototype.toString.call(new Date()))
      throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
