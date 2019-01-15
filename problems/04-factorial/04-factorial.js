/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
let remainder = sumNum - 1;

if(remainder > 0 ){
    remainder = factorial(remainder);
    remainder *= sumNum;
 return remainder;
}
return sumNum;
}

factorial(5);
console.log(factorial(5));
