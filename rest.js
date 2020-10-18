// rest operator

function sum(a, b, ...rest) {
  console.log(a, b)
  console.log(rest)
}
sum(1, 2, 3, 4, 5, 6)

// object rest

const info = {
  name: 'Amarjeet Singh',
  age: 22,
  des: 'Full Stack developer',
}
const { name, ...rest } = info
console.log(name, rest)
