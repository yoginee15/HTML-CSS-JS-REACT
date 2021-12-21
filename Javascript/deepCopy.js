let userDetails = {
    name: "Bob",
    age: 25,
    address: {
        street: "Karve road",
        city: "Pune"
    }
}

let copyUserDetails = {};

for (let key in userDetails) {
    if (typeof userDetails[key] !== "object")
        copyUserDetails[key] = userDetails[key]
    else {
        copyUserDetails[key] = {}
        for (let prop in userDetails[key]) {
            copyUserDetails[key][prop] = userDetails[key][prop]
        }
    }
}

copyUserDetails.address.street = "Laxmi road"
console.log("userDetails", userDetails)
console.log("copyUserDetails", copyUserDetails)
