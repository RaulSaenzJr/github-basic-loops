/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

// Your code here 
// Write a function called moreDotLessDash that accepts a string argument
function moreDotLessDash(str) {
    // create a variable to store the number of dots
    let dotCount = 0;
    // create a variable to store the number of dashes
    let dashCount = 0;
    // create a for loop to iterate through the string
    for (let i = 0; i < str.length; i++) {
        // check if the current character is a dot
        if (str[i] === '.') {
            // increment the dot count
            dotCount++;
        }
        // check if the current character is a dash
        if (str[i] === '-') {
            // increment the dash count
            dashCount++;
        }
    }
    // check if the dot count is greater than the dash count
    if (dotCount > dashCount) {
        // return true
        return true;
    }
    // return false
    return false;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
