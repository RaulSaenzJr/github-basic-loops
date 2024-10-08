/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
// Write a function called sillyString that accepts a word as an argument
function sillyString(word) {
    // create a variable to store the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // create a variable to store the new word
    let newWord = '';
    // create a for loop to iterate through the word
    for (let i = 0; i < word.length; i++) {
        // check if the vowels includes the word
        if (vowels.includes(word[i].toLowerCase())) {
            // add the character to the new word
            newWord += word[i] + 'b' + word[i];
        } else {
            // add the character to the new word
            newWord += word[i];
        }
    }
    // return the new word
    return newWord;
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
