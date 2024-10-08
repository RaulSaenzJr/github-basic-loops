/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// Write reverb function that accepts a word as an argument
function reverb(word) {
    // create a variable to store the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // create a variable to store the new word
    let newWord = '';
    // create a variable to store the last vowel
    let lastVowel = null;
    // check if the word is not a string
    if (typeof word !== 'string') {
        // return null
        return null;
    }
    // create a for loop to iterate through the word
    for (let i = 0; i < word.length; i++) {
        // check if the vowels includes the word
        if (vowels.includes(word[i].toLowerCase())) {
            // set the lastVowel to the current vowel
            lastVowel = i;
        }
    }
    // create a for loop to iterate through the word
    for (let i = 0; i < word.length; i++) {
        // check if the index is greater than or equal to the lastVowel
        if (i >= lastVowel) {
            // add the character to the new word
            newWord += word[i];
        }
    }
    // return the new word
    return word + newWord;
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb('197393'));  // 197393
console.log(reverb(197393));    // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
