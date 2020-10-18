// The array reduce method reduces the array of values into a single value. It executes the callback function for each value of the array.

const values = [2, 4, 6, 7, 8]

// Let's say that we want to have a sum of all these values.
// Let's see how we do it using a traditional for loop
let total = 0
for (let i = 0; i < values.length; i++) {
  const value = values[i]
  total = total + value
}
console.log(total)

// Let's use reduce method now
const initialValue = 0
const t = values.reduce(
  (total, currentValue) => total + currentValue,
  initialValue,
)
console.log(t)
