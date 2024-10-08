/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

// Your code here 
// Write a function called tripletTrue that accepts a string argument
function tripletTrue(str) {
    // create a for loop to iterate through the string
    for (let i = 0; i < str.length; i++) {
        // check if the current character is equal to the next two characters
        if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
            // return true
            return true;
        }
    }
    // return false
    return false;
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
