/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
  // Your code here 
  let reversed = '';
  for (let index = 1; index < str.length; index += 2) {
    reversed = str[index] + reversed;
  }
  return reversed;
}

console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'
console.log(elementsOfOddIndicesReversed('Aurora'));  // 'aou 
console.log(elementsOfOddIndicesReversed('hello'));   // 'le'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
