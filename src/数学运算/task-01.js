// 丑数: 只包含质因数2,3,5的数，通常情况下认为1是第一个丑数。求出第n个丑数？

// 丑数只能被2,3,5整除，所以第n个丑数肯定是0 - (n-1)中某个丑数与2,3,5的积
// 而且这个丑数是它们之间最小的且要比第n-1个丑数要大
function getUglyNumber (index) {
  let arr = [1] // 构造丑数列表，第一个丑数为1
  let i2, i3, i5
  i2 = i3 = i5 = 0
  while (arr.length < index) {
    arr.push(Math.min(arr[i2] * 2, arr[i3] * 3, arr[i5] * 5))
    const current = arr[arr.length - 1]
    while (arr[i2] * 2 <= current) {
      i2++
    }
    while (arr[i3] * 3 <= current) {
      i3++
    }
    while (arr[i5] * 5 <= current) {
      i5++
    }
  }
  return arr[index - 1]
}

let result = getUglyNumber(8)
console.log(result)
