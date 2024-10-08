/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/

// Your code here 
// Write a function called leastCommonMultiple that accepts two numbers as arguments
function leastCommonMultiple(num1, num2) {
    // create a variable to store the max number
    let max = Math.max(num1, num2);
    // create a while loop to iterate through the numbers
    while (true) {
        // check if the max number is divisible by both numbers
        if (max % num1 === 0 && max % num2 === 0) {
            // return the max number
            return max;
        }
        // increment the max number
        max++;
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
