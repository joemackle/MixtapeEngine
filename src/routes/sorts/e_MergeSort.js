// merge Sore algorithm
// its my Birthday today

function mergeEverything(arr, left, mid, right) {
    const leftArraySize = mid - left + 1;
    const rightArraySize = right - mid;
    const arrleft = new Array(leftArraySize);
    const arrRight = new Array(rightArraySize);

    for (let i = 0; i < leftArraySize; i++) {
        arrleft[i] = arr[left + i];
    }
    for (let k = 0; k < rightArraySize; k++) {
        arrRight[k] = arr[mid + 1 + k];
    }

    // merging here
    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArraySize && j < rightArraySize) {
        if (arrLeft[i] <= arrRight[j]) {
            arr[k] = arrLeft[i];
            i++
        }
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

