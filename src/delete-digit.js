const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = String(n).split('');
  let max = 0;
  arr.forEach((i) => {
    console.log(arr);
    let changedArr = arr.splice(i, 1);
    let newNumber = Number(changedArr.join(''));
    if (newNumber > max) {
      max = newNumber;
    }
  })
  return max;
}

module.exports = {
  deleteDigit
};
