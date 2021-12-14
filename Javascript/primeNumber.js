- after division if remainder is not zero then no.is not divisble

    - after division if we get reminder zero = no is divisble

let no1 = +prompt("Enter first number") //10
let no2 = +prompt("Enter second number") //15

1. for with if else
    2. while 
3. do..while(condition) {

    }

1 - 15 // 3,5,7,11,13

let count = 0;
for (let i = no1; i <= no2; i++) {
    if () {

    }
    if (no2 % i === 0) {

        count++
    }
}


1 - 5 //2,3,5
let no1 = 10
let no2 = 15

for (let num = no1; num <= no2; num++) {
    let i = 2
    for (; i < num; i++) {
        if (num % i === 0) {
            break
        }
    }
    if (i === num)
        alert(i + "is prime")
}


2 != 1 * 2 =2
3! = 1 * 2 * 3 = 6
4! = 1 * 2 * 3 * 4= 24

let fact = 1;
for (let i = 1; i <= no1; i++) {
    fact = fact * i
}
alert("Factorial of " + no + " is " + fact)


userName = "admin"
password = "admin"

let userName = prompt("Username")
let password = promt("Password")

while loop > if else
    for loop >

        let count = 0;
do {
            let userName = prompt("Username")
            let password = prompt("Password")
            if (userName === "admin" && password === "admin") {
                alert("Welcome")
                break;
            } else {
                alert("Please try again")
            }
            count++;
        } while (count < 3)
if (count === 3) {
    alert("You are not a right person")
}