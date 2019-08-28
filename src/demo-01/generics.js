"use strict";
// 泛型类
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T
// }
// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 0
// myGenericNumber.add = (x, y) => x + y
// 泛型类型(<T>)跟在类名后面
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// 调用类时，将泛型类型放在泛型类后面
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var other = new GenericNumber();
other.zeroValue = 'hello';
other.add = function (a, b) { return a + b; };
other.add('hello', 'world');
