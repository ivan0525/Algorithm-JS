// 存取器

/*
class Employee {
  fullName: string
}

let employee = new Employee()
employee.fullName = 'zx'
if (employee.fullName) {
  console.log(employee.fullName)
}


let password = 'my password'
class Employee {
  private _fullName: string
  constructor(name: string) {
    this._fullName = name
  }

  get fullName(): string {
    return this._fullName
  }
  set fullName(newName: string) {
    if (password && password === 'my password1') {
      this._fullName = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee('张鑫')
employee.fullName = '李四'
*/


// 静态属性
/*
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
*/

// 抽象类
// 抽象类中的抽象方法不包含具体实现，需要在派生类中实现
abstract class Animal {
  abstract makeSound(): void
  constructor(public name: string) { }
  move(): void {
    console.log('moved')
  }
  printName(): void {
    console.log(this.name)
  }
}

class Dog extends Animal {
  constructor() {
    super('a')
  }
  makeSound(): void {
    console.log('wang...wang...wang...')
  }
  playBall(): void {
    console.log('playing ball')
  }
}

let animal: Animal // 允许创建一个对抽象类型的引用
// animal = new Animal() // 不能创建一个抽象类实例
animal = new Dog()
animal.printName()
// animal.playBall() // 错误：方法在申明的抽象类中不存在

let jack = new Dog()
jack.makeSound()
jack.move()

// 构造函数

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting
  }
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    }
    else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter('haha');
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;

greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker('haha');
console.log(greeter2.greet());

let greeter3: Greeter = new Greeter('jaja')
console.log(greeter3.greet())

// interface Point {
//   x: number
//   y: number
// }

// let p: Point = {
//   x: 1, y: 2
// }
// console.log(p)

class Ponit {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

interface Point3D extends Ponit {
  z: number
}
let p3d: Point3D = { x: 1, y: 2, z: 2 }
