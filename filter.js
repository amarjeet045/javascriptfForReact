// The array filter method creates a new array with elements that satisfy some given criteria.
const users = [
  { id: 1, posts: 2 },
  { id: 2, posts: 1 },
  { id: 3, posts: 5 },
  { id: 4, posts: 4 },
  { id: 5, posts: 3 },
]
const t = users.filter((user) => user.posts >= 3)
console.log(t)
//[ { id: 3, posts: 5 }, { id: 4, posts: 4 }, { id: 5, posts: 3 } ]
