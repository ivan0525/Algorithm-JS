// 编写一个程序判断给定的数是否为丑数。
// 丑数就是只包含质因数 2, 3, 5 的正整数。

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) {
    return false
  }
  while (num != 1) {
    if (num % 2 === 0) {
      num /= 2
    } else if (num % 3 === 0) {
      num /= 3
    } else if (num % 5 === 0) {
      num /= 5
    } else {
      return false
    }
  }
  return true
}

let result = isUgly(5)
console.log(result)
