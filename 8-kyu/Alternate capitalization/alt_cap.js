/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

//Solution

const capitalize = s =>
  [0, 1].map(bool => [...s].map((char, i) => (i % 2 === bool ? char.toUpperCase() : char)).join(''))
