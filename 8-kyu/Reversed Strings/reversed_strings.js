/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/

//Solution:

function solution(str){
  str = str
    .split('')
    .reverse()
    .join('')
    return str
}
