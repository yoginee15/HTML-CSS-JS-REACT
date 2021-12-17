// let myObj = new Object()
// console.log("myObj using new Object()", myObj) //{}

// let myObj1 = {}
// console.log("myObj using literal syntaxx", myObj1) // {}: empty object

// //Object creation
// let user = { name: "XYZ" }
// console.log("User", user)

// let admin = new Object({ name: 'admin' }); // {}
// console.log("Admin", admin)

// //Read/Access
// let userName = user.name
// console.log("User name is ", userName)

// //Add/Edit/Update:
// user.age = 29; //Add
// admin.role = "admin" //add

// user.name = "Bob" //Update

// console.log("User", user)
// console.log("Admin", admin)

// //To remove property from an object:
// delete admin.role
// console.log("Admin", admin)

// console.log("Admin name", admin['name'])

// let student = {
//     name: 'pqr',
//     'likes math': true
// }

// console.log(student['likes math'])

// //
// let person = { fName: "Bob", lName: "Thomas", age: 55, designation: "Technical lead" }
// let key = "designation"
// console.log("person.key", person.key)
// console.log("person.designation", person.designation)
// console.log("person[key]", person[key]) // person["designation"]

// let user = {}
// let property = prompt("Which property you want to add in user object")
// let value = prompt("Please tell us value for " + property)
// user[property] = value
// alert("Now your user object is " + JSON.stringify(user))
// console.log("Now your user object is", user)

// Factory pattern:
function createUser(name, age) {
    return {
        let: name,
        const: age
    }
}

let user1 = createUser('xyz', 30) // {name:'xyz',age:'30'}
let user2 = createUser('pqr', 20) // {name:'pqr',age:'20'}
let user3 = createUser('bob', 40) // {name:'bob',age:'40'}
let user4 = createUser('tom', 20) // {name:'tom',age:'20'}
let user5 = createUser('guy', 60) // {name:'guy',age:'60'}

console.log("User1", user1)
console.log("user2", user2)
console.log("user3", user3)
console.log("user4", user4)
console.log("user5", user5)

let name = "Test";
let rollNo = 1;
let student = { rollNo, name }

console.log("Student", student)

// === or  == undefined
// {test:undefined}
// in operator

let user = { name: "xyz", age: 50, test: undefined }

if ("test" in user === false) {
    console.log("test property is not available in user object")
}
//OR
if (!("test" in user)) {
    console.log("test property is not available in user object")
}
//OR
if ("test" in user) {
    console.log("test property is available in user object")
} else {
    console.log("test property is not available in user object")
}

let testUser = {
    "fName": "test",
    "mName": "testM",
    "lName": "testL",
    age: 30,
    city: "Pune",
    0: "test with number key"
}
for (let prop in testUser) {
    console.log(prop + " : " + testUser[prop])
}

let keys = Object.keys(testUser)
let values = Object.values(testUser)

console.log("Keys of testUser", keys)
console.log("values of testUser", values)

//testUser[prop]
// 1. prop = '0'
// 2. testUser['0']
// "test with number key"

let User = {
    name: "xyz",
    age: 25,
    address: {
        steet_name: 'Karve road'
    }
}

let userCopy1 = {}
for (let key in User) {
    userCopy1['key'] = User[key]
}
//


console.log("userCopy1", userCopy1)

console.log(User === userCopy1)
