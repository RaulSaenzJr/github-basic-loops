/*
Pig Latin is a fun take on the English language where you move any consonant
cluster from the start of the word to the end of the word; when words begin on a
vowel, you simply add "-yay".

Vowels are the letters "a", "e", "i", "o", "u".

Write a function pigLatinWord that takes in a word string and translates the
word into Pig Latin. For this problem use the String's slice() method. The
slice() method extracts a section of a string and returns it as a string.
Hint: Remember the String.includes method!

So the two rules for our version of Pig Latin are:
1. For words that start with a vowel, add 'yay' to the end of the word.
2. For words that start with a non-vowel, move all letters that come **before
   the first vowel** to the **end of the word** then add 'ay'
*/

function pigLatinWord(word) {
    // Your code here 
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let firstVowelIdx = -1;

    // Find the index of the first vowel
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            firstVowelIdx = i;
            break;
        }
    }

    // If the word starts with a vowel, add 'yay' to the end
    if (firstVowelIdx === 0) {
        return word + 'yay';
    }

    // If no vowel is found, return the word as is (though this case is unlikely)
    if (firstVowelIdx === -1) {
        return word;
    }

    // Construct the Pig Latin word
    return word.slice(firstVowelIdx) + word.slice(0, firstVowelIdx) + 'ay';
}


console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pigLatinWord;
