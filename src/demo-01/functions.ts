function add(x: number, y: number): number {
  console.log(x + y)
  return x + y
}

add(1, 4)

let myAdd: (a: number, b: number) => number;
myAdd = add
myAdd(1, 2)
