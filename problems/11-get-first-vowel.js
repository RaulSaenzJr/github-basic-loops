/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// define getFirstVowel that takes in a string
function getFirstVowel(str1) {
    // create a variable to store the vowels
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    // create a for loop to iterate through the string
    for (let char of str1) {
        // check if the string includes the vowels
        if (vowel.includes(char)) {
            // return the first vowel
            return char;
        }
    }
    // return null if there is no vowel
    return null;
}

console.log(getFirstVowel('battery'));      // 'a'
console.log(getFirstVowel('tunnel'));       // 'u'
console.log(getFirstVowel('dog'));          // 'o'
console.log(getFirstVowel('conventional')); // 'o'
console.log(getFirstVowel('rhythm'));       // null
console.log(getFirstVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getFirstVowel;
