// object destructring

const user = {
  name: 'Amarjeet Singh',
  office: 'Growthfile Analytics Private Limited',
  Age: '22',
}

// without object destructring

console.log(`${user.name},${user.office},${user.Age}`)

// with object destructring

const { name, office, Age } = user
console.log(name, office, Age)

// Array destructring

const info = ['Amarjeet Singh', 'Growthfile', '22']
// without Array destructring

const namess = info[0]
const offices = info[1]
const age = info[2]

console.log(age)
// with array destructring

const [names, officess, ages] = info

console.log(names, officess, ages)
