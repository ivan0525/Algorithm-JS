// 逆波兰
let resolveRPN = function(arr) {
  let stack = []
  for (let val of arr) {
    switch (val) {
      case '+':
        stack.push(stack.pop() + stack.pop())
        break
      case '-':
        let sub = stack.pop()
        stack.push(stack.pop() - sub)
        break
      case '*':
        stack.push(stack.pop() * stack.pop())
        break
      case '/':
        let divisor = stack.pop()
        stack.push(parseInt(stack.pop() / divisor, 10))
        break
      default:
        stack.push(parseInt(val, 10))
    }
  }
  return stack.pop()
}

let result = resolveRPN(['4', '3', '-'])
console.log(result)
