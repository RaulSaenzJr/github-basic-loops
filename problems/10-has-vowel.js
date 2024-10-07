/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function hasVowel(str1) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str1) {
        if (vowel.includes(char)) {
            return true;
        }
    }
    return false;
};

console.log(hasVowel('dog'));          // => true
console.log(hasVowel('conventional')); // => true
console.log(hasVowel('rhythm'));       // => false
console.log("Rhythm you either have it or you don't");
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
