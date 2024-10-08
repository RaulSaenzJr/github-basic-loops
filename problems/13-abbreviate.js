/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// Write a function called abbreviateWord that takes in a string argument
function abbreviate(str1) {
    // create a variable to store the vowels
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    // create a variable to store the new string
    let newStr = '';
    // create a for loop to iterate through the string
    for (let char of str1) {
        // check if the string includes the vowels
        if (!vowel.includes(char.toLowerCase())) {
            // add the character to the new string
            newStr += char;
        }
    }
    // return the new string
    return newStr;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
