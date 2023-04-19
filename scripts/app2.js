// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


var wheat = 250
var barley = 450
var dates = 2100
var raisins = 2800

var familyMembers = +prompt("Total Number Of family Members")
var fitrahMethod = prompt("Select Fitrah Method: 'Wheat' , 'Barley' , 'Dates' , 'Raisins'")
if (fitrahMethod == 'wheat' || fitrahMethod == 'Wheat') {
    var result = (familyMembers * wheat)
    alert("Your Calculated Fitrah Amount is:" + result)
} else if (fitrahMethod == 'barley' || fitrahMethod == 'Barley') {
    var result = (familyMembers * barley)
    alert("Your Calculated Fitrah Amount is:" + result)
} else if (fitrahMethod == 'dates' || fitrahMethod == 'Dates') {
    var result = (familyMembers * dates)
    alert("Your Calculated Fitrah Amount is:" + result)
} else if (fitrahMethod == 'raisins' || fitrahMethod == 'Raisins') {
    var result = (familyMembers * raisins)
    alert("Your Calculated Fitrah Amount is:" + result)
} else {
    alert("Sorry!You enter wrong method, Try Again")
}