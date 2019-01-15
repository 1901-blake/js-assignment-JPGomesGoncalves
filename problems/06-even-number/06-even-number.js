/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if (someNum < 0) {
        someNum = -someNum;
    }
  for (let index = 0; index < someNum; index++) {
      if(someNum % 2 == 0)
      {
        return true;
      }
      else{
          return false;
      }
  }
}

console.log(isEven(5));