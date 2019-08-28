"use strict";
// 存取器
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log('moved');
    };
    Animal.prototype.printName = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, 'a') || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('wang...wang...wang...');
    };
    Dog.prototype.playBall = function () {
        console.log('playing ball');
    };
    return Dog;
}(Animal));
var animal; // 允许创建一个对抽象类型的引用
// animal = new Animal() // 不能创建一个抽象类实例
animal = new Dog();
animal.printName();
// animal.playBall() // 错误：方法在申明的抽象类中不存在
var jack = new Dog();
jack.makeSound();
jack.move();
// 构造函数
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter('haha');
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker('haha');
console.log(greeter2.greet());
var greeter3 = new Greeter('jaja');
console.log(greeter3.greet());
// interface Point {
//   x: number
//   y: number
// }
// let p: Point = {
//   x: 1, y: 2
// }
// console.log(p)
var Ponit = /** @class */ (function () {
    function Ponit(x, y) {
        this.x = x;
        this.y = y;
    }
    return Ponit;
}());
var p3d = { x: 1, y: 2, z: 2 };
