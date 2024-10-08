/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// Write a function called vowelCipher that takes in a string argument
function vowelCipher(str1) {
    // create a variable to store the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // create a variable to store the vowels
    let newStr = '';
    // create a for loop to iterate through the string
    for (let char of str1) {
        // check if the string includes the vowels
        if (vowels.includes(char.toLowerCase())) {
            // add the character to the new string
            newStr += nextVowel(char);
        } else {
            // add the character to the new string
            newStr += char;
        }
    }
    // return the new string
    return newStr;
}

// Define the nextVowel function
function nextVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowerChar = char.toLowerCase();
    let index = vowels.indexOf(lowerChar);
    let nextIndex = (index + 1) % vowels.length;
    let nextChar = vowels[nextIndex];
    return char === lowerChar ? nextChar : nextChar.toUpperCase();
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
