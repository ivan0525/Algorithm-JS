"use strict";
function add(x, y) {
    console.log(x + y);
    return x + y;
}
add(1, 4);
var myAdd;
myAdd = add;
myAdd(1, 2);
