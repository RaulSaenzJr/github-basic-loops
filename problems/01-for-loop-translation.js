/*
The following function is named `aCounter(word)`. The function takes in a word
and returns the number of a's within that word. The function counts both
lowercase (a) and uppercase (A). Your job is to translate the following function
to use a `for` loop instead of the `while` loop it is currently using.
*/

/**
 * Counts the number of occurrences of the letter 'a' (both lowercase and uppercase) in a given word.
 * The function uses a for loop to iterate over each character in the word.
 * The loop initializes an index variable to 0, checks if the index is less than the length of the word,
 * and increments the index by 1 after each iteration.
 * Inside the loop, it checks if the current character is 'a' or 'A' and increments the count accordingly.
 */
function aCounter(word) {
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    let char = word[index];
    if (char === "a" || char === "A") {
      count += 1;
    }
  }
  return count;
}

console.log(aCounter("apple"));      // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple"));    // => 3


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = aCounter;

