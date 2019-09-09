/**
 * 判断回文数
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let reserveNumber = 0
  while (reserveNumber < x) {
    reserveNumber = reserveNumber * 10 + (x % 10)
    x = parseInt(x / 10, 10)
    console.log(reserveNumber, x)
  }
  return x === reserveNumber || x === parseInt(reserveNumber / 10, 10)
}
let result = isPalindrome(121)
console.log(result)
