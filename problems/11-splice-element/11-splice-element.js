/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {

    let splicedarray = [];
    let count = 0;

    for (let i = 0; i < someArr.length; i++) {
        if (i === index) {
            someArr[i] = null;
        }

        if (someArr[i] != null && i <= someArr.length - 1) {
            splicedarray[count] = someArr[i];
            count++;
        }
    }
    return splicedarray;
}

let temp = [1,2,3,4,5,6,7];
temp = spliceElement(temp,6);

for (let index = 0; index < temp.length; index++) {
    console.log(temp[index]);
}


