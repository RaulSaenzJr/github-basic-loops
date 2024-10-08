/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

// Your code here 
// Write a function called doubleLetterCount that takes in a string argument
function doubleLetterCount(str1) {
    // create a variable to store the count
    let count = 0;
    // create a for loop to iterate through the string
    for (let i = 0; i < str1.length; i++) {
        // check if the current character is equal to the next character
        if (str1[i] === str1[i + 1]) {
            // increment the count
            count++;
        }
    }
    // return the count
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
