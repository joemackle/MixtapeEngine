// merge Sore algorithm

// changes array in place
function mergeEverything(arr, left, mid, right) {
    // this create 2 array that hold [left...mid] and [mid+1...right]
    const leftArraySize = mid - left + 1;
    const rightArraySize = right - mid;
    let arrLeft = new Array(leftArraySize);
    let arrRight = new Array(rightArraySize);

    for (let i = 0; i < leftArraySize; i++) {
        arrLeft[i] = arr[left + i];
    }
    for (let k = 0; k < rightArraySize; k++) {
        arrRight[k] = arr[mid + 1 + k];
    }

    // merging arrLife && arrRight into "arr that was passed in"!
    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArraySize && j < rightArraySize) {
        if (arrLeft[i].score >= arrRight[j].score) {
            arr[k] = arrLeft[i];
            i++
        }
        else {
            //code
            arr[k] = arrRight[j];
            j++;
        }
        k++;
    }

    // this is a O(1) time operation because there will only every be 
    // about 1 more element in each array that needs to be sorted
    // <-- addes the remaining elements into the array -->
    while (i < leftArraySize) {
        arr[k] = arrleft[i];
        i++;
        k++;
    }
    while (j < rightArraySize) {
        arr[k] = arrRight[j];
        j++;
        k++;
    }
}

// when calling this funciton you need to pass in the parameters like this...
// mergeSort(data, 0, data.length-1)
function mergeSort(arr, leftSide, rightSide) {

    // this if statement is the base case. Breaking the array down to 1 element
    if (leftSide < rightSide) {
        let middle = leftSide + ((rightSide - leftSide) / 2);
        mergeSort(arr, leftSide, middle);
        mergeSort(arr, middle + 1, rightSide);

        mergeEverything(arr, leftSide, middle, rightSide);
    }
}

