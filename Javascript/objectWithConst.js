// const user = { name: "XYZ", age: 30 }
// user.age = 35; // allowed
// console.log("User", user)
// user = {} //Error

let userDetails = {
    name: "XYZ Pvt.Ltd",
    address: { street: "Karve road", city: "Pune" },
    age: 30,
    role: "admin",
    designation: "Technical Lead",
    HRA: 30000,
    basic: 10000,
    EA: 5000
}

// let copy = {}
// for (let details in userDetails) {
//     if (typeof details == "string")
//         copy[details] = userDetails[details]
//     else {
//         for (let key in details) {
//             if (typeof key == "string")
//                 copy[details][key] = userDetails[details][key]
//         }
//     }
// }


const copyObject = (obj) => {
    let copy = {}
    for (let key in obj) {
        if (typeof key == "string")
            copy[key] = userDetails[key]
        else
            return copy[key] = copyObject(obj[key])
    }
    return copy
}

console.log("copy", copyObject(userDetails))
