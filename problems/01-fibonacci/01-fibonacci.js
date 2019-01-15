/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let first = 0;
    let second = 1;
    let sum = first + second;

    for (let index = 0; index < n; index++) {
    first = second;
    second = sum;
    sum = first + second;

    }
    console.log(sum);
}

fib(5);