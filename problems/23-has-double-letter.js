/*
Write a function hasDoubleLetter(str) that accepts a string. The function should
return a boolean indicating whether the string contains two of the same
character consecutively. If the value passed into the function is not a string,
return null.
*/

// Your code here 
// Write a function called hasDoubleLetter that accepts a string argument
function hasDoubleLetter(str) {
    // check if the string is not a string
    if (typeof str !== 'string') {
        // return null
        return null;
    }
    // create a for loop to iterate through the string
    for (let i = 0; i < str.length; i++) {
        // check if the current character is equal to the next character
        if (str[i] === str[i + 1]) {
            // return true
            return true;
        }
    }
    // return false
    return false;
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasDoubleLetter;
