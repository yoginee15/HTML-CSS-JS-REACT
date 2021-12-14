Take an i / p form user
let char = prompt("Enter an alphabet")
char = char.toLowerCase();

0    1    2    3    4
let arr = ['a', 'e', 'i', 'o', 'u']
arr.length // 5
let isVowel = false
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
        isVowel = true
        break
    }
}
if (isVowel) {
    alert()
} else {
    ale
}


1. if...else
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert()
} else {
    alert()
}

2. if...else if...else
if (char === "a") {

} else if (char === "e") {

} else if (char === "i") if (char === "o") {

} else if (char = "u") {

} else {
    alert("")
}



3. switch (char) {
    case 'a':
    case 'i':
    case 'o':
    case 'e':
    case 'u':
        alert("Its a vowel")
        break;
    default:
        alert("Its not a vowel")
        break;
}