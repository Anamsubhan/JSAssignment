// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


var products = ['Lays', 'Kurkuray', 'sooper', 'zeeraplus', 'juice', 'chocolate']
var userInput = prompt("Enter Position")
var newprd = products.splice(userInput, 1)
console.log(products)
console.log(newprd)