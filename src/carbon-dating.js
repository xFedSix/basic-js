const { NotImplementedError } = require("../extensions/index.js");

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
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const CONST_HALF_LIFE_PERIOD = 0.693;
function dateSample(sampleActivity) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let elemСoncentration = CONST_HALF_LIFE_PERIOD / HALF_LIFE_PERIOD;
  let activity = +sampleActivity;
  let log = Math.log(MODERN_ACTIVITY / activity);
  let res = log / elemСoncentration;
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity <= 0 ||
    sampleActivity > 15 ||
    sampleActivity === undefined ||
    isNaN(sampleActivity)
  ) {
    return false;
  }
  return Math.ceil(res);
}

module.exports = {
  dateSample,
};
