/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

function caesarCipher(string, num) {
    // Your code here 
    // create a variable to store the alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // create a variable to store the new string
    let newStr = '';
    // create a for loop to iterate through the string
    for (let char of string) {
        // check if the character is a letter
        if (alphabet.includes(char)) {
            // add the character to the new string
            newStr += shiftChar(char, num, alphabet);
        } else {
            // add the character to the new string
            newStr += char;
        }
        
        // Helper function to shift a character by num positions in the alphabet
        function shiftChar(char, num, alphabet) {
            let currentIndex = alphabet.indexOf(char);
            let newIndex = (currentIndex + num) % alphabet.length;
            return alphabet[newIndex];
        }
    }
    // return the new string
    return newStr;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
