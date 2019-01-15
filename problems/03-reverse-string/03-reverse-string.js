/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {

  //hello
  //olleh
  let arr = [];
    let copiedindex = someStr.length - 1;
    for (let index = 0; index < someStr.length; index++) {

        arr[index]  = someStr[copiedindex];
        copiedindex--;
    }
    return arr;
}

let temp = reverseStr('hello');

console.log(temp);