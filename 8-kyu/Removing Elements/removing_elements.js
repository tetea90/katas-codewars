/*
Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:

my_list = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

//Solution:

function removeEveryOther(arr){
  let arr1 = [];
  for(let i = 0; i < arr.length; i+=2){
      arr1.push(arr[i]);
  } return arr1;
}
