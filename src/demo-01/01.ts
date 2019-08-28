// 使用接口来定义对象类型
interface Person {
  // 只读属性用readonly定义,该属性就不能被赋值
  readonly id: string,
  firstName: string,
  lastName?: string,
  [propName: string]: any
}

let p: Person = {
  id: '23213213',
  firstName: 'zx',
  lastName: 'aa',
  age: 1
}

let a: String = '1212'

let list: Array<number | string> = [211, '12321']
let arr: (number | string)[] = [1, 2, 'dfs']

// 元组类型,用来表示已知数量和类型的数组
let x: [number, string] = [1, 'one']

// 枚举

enum Color { Red, Blue, Green }

let c: Color = Color.Green


let notSure: object = {}

function error(message: string): never {
  throw new Error(message);
}

let someValue: any = '2132'
let strLength: number = (<string>someValue).length
console.log(strLength)


interface Point {
  readonly x: string,
  readonly y: number
}


let p1: Point = { x: '12', y: 12 }
console.log(p1)

export default { p, arr }
