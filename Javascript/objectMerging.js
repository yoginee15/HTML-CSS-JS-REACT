let users = {}

let user1 = { name: "Bob", age: 30, role: "admin", designation: "Technical Lead" }
let user2 = { name: "Tom", age: 29, role: "user" }

Object.assign(users, user1, user2)

console.log("Users", users)


let user = { name: "Bob", age: 30, }
let userRole = { role: "admin", designation: "Technical Lead" }
let companyDetails = { name: "XYZ Pvt.Ltd" }
let salaryDetails = { HRA: 30000, basic: 10000, EA: 5000 }

let userDetails = Object.assign({}, user, userRole, companyDetails, salaryDetails)
/* userDetails : {
name: "XYZ Pvt.Ltd",
 age: 30
 role: "admin", 
 designation: "Technical Lead"
 HRA: 30000, 
 basic: 10000,
 EA: 5000 
}*/


console.log("Users", users)

let user11 = { name: "Bob", age: 30, role: "admin" }
let userCopy11 = { ...user11 }
console.log("userCopy11", userCopy11)
