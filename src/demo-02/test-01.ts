// -----防止命名冲突---------------------
/*
let settings: jQuery.AjaxSettings = {
  method: 'POST',
  data: {
    name: 'foo'
  }
}

jQuery.ajax('https://www.baidu.com', settings)

*/
// -----防止命名冲突---------------------


// -----------------------声明合并---------------------
// jQuery('#app')
// jQuery.ajax('http://localhost:80/api/list')


// -----------------export-------------------
// import { name, getName, Animal, Direction, Option } from 'foo'
// console.log(name)

// ------混用declare和export-------
import { name, sayName } from 'foo'
console.log(name)
sayName(name)


// 函数声明
/*
let fun: (x: string) => void
fun = function (x: string) {
  console.log(1)
}
*/



