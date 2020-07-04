/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//Solution:

const sumMix = x => x.reduce((total, value) => total + Number(value), 0)
