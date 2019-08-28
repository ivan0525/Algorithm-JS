interface JJ {
  JJSize: string,
  JJLength: number
}

interface Human {
  name: string,
  age: number
}

function create<T extends JJ>(what: T): T {
  return what
}

create({
  age: 18,
  JJSize: 'big',
  name: 'jack',
  JJLength: 20
})

function identity<T>(arg: T): T {
  return arg
}

let muIdentity: <T>(arg: T) => T = identity

let myIdentity: <U>(arg: U) => U = identity
let objIdentity: { <T>(arg: T): T } = identity
objIdentity(false)
muIdentity('12')
identity([1])

function testLength<T>(arg: T[]): number {
  return arg.length
}

let arr: number[]
arr = [1, 2, 3]
testLength(arr)

interface GenericIdentityFn {
  <T>(arg: T): T
}

let aa: GenericIdentityFn = identity
aa(1)


interface GFn<T> {
  (arg: T): T
}

let bb: GFn<number> = identity
bb(1)

class GenericHuman<T> {
  name!: T;
  sayName!: (arg: T) => T;
}

let myGenericHuman = new GenericHuman<number>()
