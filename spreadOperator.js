// spread operator

// Array spread operator

const a = [1, 2, 3]
const b = [5, 6, 7]

console.log(a)
// 1,2,3

const c = [0, ...a, 4, ...b]
console.log(c)

// object sprad operator

const first = {
  name: 'Amarjeet Singh',
}
const second = {
  age: 22,
}

const result = { ...first, ...second, d: 4 }
console.log(result)
