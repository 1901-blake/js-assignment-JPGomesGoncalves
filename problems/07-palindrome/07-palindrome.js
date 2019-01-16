/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    
    let backwardsarr = someStr;
    let backwardsindex = backwardsarr.length-1;

    for (let index = 0; index < someStr.length; index++) {
        if (backwardsarr[backwardsindex] == someStr[index]) {
            backwardsindex--;
            continue;
        }
        else{
            return false;
        }
    }
    return true;
  
}

console.log(isPalindrome('mom'));