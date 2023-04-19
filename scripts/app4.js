// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).


var userName = prompt("Enter Your Name")
var upperCase = userName.slice(0, 1).toUpperCase()
var lowerCase = userName.slice(1).toLowerCase()
console.log(upperCase + lowerCase)