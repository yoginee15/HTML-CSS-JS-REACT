let no1 = +prompt("Enter value for number  1")
let no2 = +prompt("Enter value for number  2")
if (no2 == 0) {
    alert("Number two should not be zero")
} else {
    alert("Division is " + no1 / no2)
    console.log("Result", no1 / no2)
}
function add() {
    alert(no1 + no2)
}