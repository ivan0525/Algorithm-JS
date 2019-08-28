"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p = {
    id: '23213213',
    firstName: 'zx',
    lastName: 'aa',
    age: 1
};
var a = '1212';
var list = [211, '12321'];
var arr = [1, 2, 'dfs'];
// 元组类型,用来表示已知数量和类型的数组
var x = [1, 'one'];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = {};
function error(message) {
    throw new Error(message);
}
var someValue = '2132';
var strLength = someValue.length;
console.log(strLength);
var p1 = { x: '12', y: 12 };
console.log(p1);
exports.default = { p: p, arr: arr };
