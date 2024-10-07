/*
Define a function multiplesOfFive that takes in a number parameter. It should
return a count of all numbers greater than or equal to 0 and less than the
number parameter that are multiples of 5.
*/

// Your code here 
// create a function that takes in a number
function multiplesOfFive(num1) {
    // create a variable to store the count
    let count = 0;
    // create a for loop to iterate through the number
    for (let i = 0; i < num1; i++) {
        // check if the number is a multiple of 5
        if (i % 5 === 0) {
            // increment the count
            count++;
        }
    }
    return count;
}

console.log(multiplesOfFive(20)); // => 4    // 0, 5, 10, 15
console.log(multiplesOfFive(10)); // => 2    // 0, 5
console.log(multiplesOfFive(14)); // => 3    // 0, 5, 10
console.log(multiplesOfFive(21)); // => 5    // 0, 5, 10, 15, 20

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = multiplesOfFive;
