/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

        for (let i = 0; i < numArray.length - 1; i++) {
            for (let j = 0; j < numArray.length - 1; j++) {
                if (numArray[j] > numArray[j + 1]) {
                    let temp = numArray[j + 1];
                    numArray[j+ 1] = numArray[j];
                    numArray[j] = temp;
                }
            }
        
        }
}

let sortarray = [5, 1, 4, 2, 8,24,7];

bubbleSort(sortarray);
console.log(sortarray);
