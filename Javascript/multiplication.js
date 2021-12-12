let multiplier = +prompt("Enter number for table multiplication")
let isQuite = false
let i = 1;
do {
    alert("Multiplication of " + multiplier + "*" + i + "=" + multiplier * i)
    isQuite = confirm("Do you want to continue");
    i++;
} while (isQuite)