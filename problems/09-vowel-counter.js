/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// create a function called countVowels that takes in a word
function countVowels(word) {
    // use const because the vowels will not change
    // create a variable to store the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // create a variable to store the count
    let count = 0;
    // create a for loop to iterate through the word
    for (let char of word) {
        // check if the word includes the vowels
        if (vowels.includes(char)) {
            // increment the count
            count++;
        }
    }
    return count;
   
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple"));    // => 2
console.log(countVowels("pizza"));    // => 2
console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
