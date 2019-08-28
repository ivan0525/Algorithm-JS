// export
// 禁止定义具体的实现
/*
export const name: string
export function getName(): string
export class Animal {
  constructor(name: string)
  sayHi(): string
}
export enum Direction {
  Up,
  Down,
  Left,
  Right
}

export interface Option {
  data: any
}
*/

// 混用declare和export
// 先使用declare声明多个变量，最后再用export一次性导出

declare const name: string
declare function sayName(name: string): void
declare class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi()
}
export { name, sayName }
