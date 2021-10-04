//1
function countFromOne(number){
  for(let i = 1; i <= number; i++) {
      console.log(i);
  }
}

//2
function countEveryOdd(number){
  for(let i = 1; i <= number; i += 1) {
    if (i % 2 !== 0) {
       console.log(i);
      }
  }
}

//3
function isNegative(number){
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}

//4
function betweenFiveAndTwenty(integer){
  if (5 <= integer || integer <= 20) {
    return true;
  } else {
    return false;
  }
  
}
// }

//5 
function isAllLowerCase(str){
  if (str === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

// Call
countFromOne(20);
countEveryOdd(15);
console.log(isNegative(-5));
console.log(betweenFiveAndTwenty(100));
console.log(isAllLowerCase("heLlo"));