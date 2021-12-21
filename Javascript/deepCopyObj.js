let userDetails = {
    name: "Bob",
    age: 25,
    address: {
        street: "Karve road",
        city: { name: "Pune", pin: 411004 }
    }
}

function deepCopy(obj) {
    let copyObj = {}
    for (let key in obj) {
        if (typeof obj[key] !== "object" && obj[key] !== null)
            copyObj[key] = obj[key]
        else {
            copyObj[key] = deepCopy(obj[key])
        }
    }
    return copyObj
}
let deepCopyObject = deepCopy(userDetails);

// console.log("deepCopyObject", deepCopyObject)
// console.log("userDetails", userDetails)
deepCopyObject.address.city = "Mumbai"
// console.log("userDetails", userDetails)
// console.log("deepCopyObject", deepCopyObject)
console.log("Pin", userDetails?.address?.city?.pin)
let pin = (userDetails && userDetails.address && userDetails.address.city && userDetails.address.city.pin) || 000000