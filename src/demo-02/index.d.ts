// 防止命名冲突---------------------------------------------

// 暴露在最外层的 interface或type会作为全局类型作用于整个项目
// 所以我们应该尽可能的减少全局变量的数量或全局类型的数量

// 使用interface的时候需要加上jQuery前缀

/*
declare namespace jQuery {
  interface AjaxSettings {
    method?: 'GET' | 'POST',
    data?: any
  }
  function ajax(url: string, setting?: AjaxSettings): void
}
*/

// ---------------声明合并---------------
// 假如jQuery既是一个函数，可以直接调用jQuery('#foo')；又是一个对象，有子属性jQuery.ajax()

// declare function jQuery(selector: string): any
// declare namespace jQuery {
//   function ajax(url: string, setting?: any): void
// }



// export
// 禁止定义具体的实现
// export const name: string
// export function getName(): string
// export class Animal {
//   constructor(name: string)
//   sayHi(): string
// }
// export enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// export interface Option {
//   data: any
// }

