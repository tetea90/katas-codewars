/*
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/

//Solution:

const reverseSeq = n => {
  let arr = [];
  while(n>0){
    arr.push(n)
    n--
  } return arr
};
