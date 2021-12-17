// let user = { name: "xyz", age: 25, }
// let userCopy = user
// console.log("user", user)
// console.log("userCopy", userCopy)

// user.name = "Bob"
// console.log("-------------------------After name value change for user-----------------------")
// console.log("user", user)
// console.log("userCopy", userCopy)
// userCopy.age = 43
// console.log("-------------------------After age value change for userCopy-----------------------")
// console.log("user age", user.age)
// console.log("userCopy age", userCopy.age)

let user = { name: "xyz", age: 25 }
let userCopy = {}
for (let key in user) {
    userCopy[key] = user[key]
}
console.log("user", user)
console.log("userCopy", userCopy)
user.age = 40
console.log("-----------------------After age value change for user-----------------------")
console.log("user age", user)
console.log("userCopy age", userCopy)