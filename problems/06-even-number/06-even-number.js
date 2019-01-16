/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if (someNum < 0) {
        someNum = -someNum;
    }
      if (Math.round(someNum / 2) != someNum / 2 ) { //if the number divied by 2 is a decimal then it is odd
          return false;
      }
      else{
          return true;
      }
}

console.log(isEven(1));