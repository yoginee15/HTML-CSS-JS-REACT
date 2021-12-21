let user = {
    name: "Bob",
    age: 30,
    getName: function () {
        console.log(user.name)
    }
} //user = 10,000

let admin = user; // admin = 10000 {name:"Bob",age:30,getName:fun}
admin.getName()

user = null // user = null

admin.getName()
