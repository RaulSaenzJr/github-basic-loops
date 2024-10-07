/*
Define a function getLastVowel that takes in a string parameter and returns the
last vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// define a function called getLastVowel that takes in a string
function getLastVowel(str1) {
    // create a variable to store the vowels
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    // create a variable to store the vowels
    let lastVowel = null;
    // create a for loop to iterate through the string
    for (let char of str1) {
        // check if the string includes the vowels
        if (vowel.includes(char)) {
            // set the lastVowel to the current vowel
            lastVowel = char;
        }
    }
    // return the last vowel
    return lastVowel;
}

console.log(getLastVowel('battery'));      // 'e'
console.log(getLastVowel('tunnel'));       // 'e'
console.log(getLastVowel('dog'));          // 'o'
console.log(getLastVowel('conventional')); // 'a'
console.log(getLastVowel('rhythm'));       // null
console.log(getLastVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getLastVowel;
