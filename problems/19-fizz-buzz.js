/*
Define a function fizzBuzz(max) that takes a number and prints every number from
0 to max (not inclusive) that is divisible by either 3 or 5, but not both.
*/

// Your code here
// define a function called fizzBuzz that takes in a number
// and prints every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both
function fizzBuzz(max) {
    // create a for loop to iterate through the numbers
    for (let i = 0; i < max; i++) {
        // check if the number is divisible by 3 or 5 but not both
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            // print out the number
            console.log(i);
        }
    }
} 

fizzBuzz(20); // prints out:
/*
3
5
6
9
10
12
18
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;
