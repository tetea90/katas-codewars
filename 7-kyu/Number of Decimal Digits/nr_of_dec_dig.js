/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

//Solution:

function digits(n) {
  let count = 0;
  if(n==0) return 1
  while(n>1){
    console.log(n)
    n = n/10;
    count++;
    console.log(count)
  } return count
}
