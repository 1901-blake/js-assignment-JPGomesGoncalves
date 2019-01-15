/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if (startIndex >= 0 && endIndex <= someStr.length) {
        
        let stringresult = [];
        let start = 0;
        for (let index = startIndex; index < endIndex; index++) {
        
            stringresult[start] =  someStr[index];
            start++;
        }
            return stringresult;
    }
    else{
        throw 'invalid start or end index';
    }
            
}

let result = substring('hello',0,3);
console.log(result);
