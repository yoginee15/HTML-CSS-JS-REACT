// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getName =  () => {
//         console.log(this.name)
//     }
return {};
// }

// let user = new CreateUser("Bob", 30)
// /* user = {
//     name:"Bob",
//     age:30,
//     getName:function(){
//     alert(this.name)
//     }
// } */

// console.log("getName", user.getName)
// /* function(){
//     alert(this.name)
//     }
// */

// user.getName()


const getItemName = function () {
    console.log(this.name)
}

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

// this : not bound

// let student = { name: "test", age: 22, getName: getItemName }
// student.getName()

// getItemName()