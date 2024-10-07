/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  // Your code here
  // find the length of the string use Math.ceil to round up
  let half = Math.ceil(str.length / 2);
  // slice the string from 0 to half
  let result = str.slice(0, half);
  return result; 
}

console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet'));  // 'pla'
console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
