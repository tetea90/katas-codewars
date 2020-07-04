/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

//Solution:

function past(h, m, s){
  let ms = s/1000;
  var sum1, sum2, sum3;
  if(s>= 0 && s<=59){
    sum1 = s * 1000;
  }
  if(m>= 0 && m<=59){
    sum2 =  60000 * m; 
  }
  if(h>=0 && h<=23){
    sum3 = 3600000 * h
  }
  return sum1 + sum2 + sum3;
}

