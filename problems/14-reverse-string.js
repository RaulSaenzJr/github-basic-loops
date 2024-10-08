/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

// Your code here 
// Write a function called reverseString that takes in a string argument
function reverseString(str1) {
    // create a variable to store the new string
    let newStr = '';
    // create a for loop to iterate through the string
    for (let i = str1.length - 1; i >= 0; i--) {
        // add the character to the new string
        newStr += str1[i];
    }
    // return the new string
    return newStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
