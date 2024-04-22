// quick sort algorithm

// call this function like this...
// quickSort(data, 0, data.length-1);
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

function partition(arr, low, high) {
    // here we are selecting a pivot at 1st index 
    // (random in the 114,000 length data array.) couldnt do this due to the time we have
    /*  
        "Choosing a random pivot minimizes the chance that you will 
        encounter worst-case O(n2) performance (always choosing first or last 
        would cause worst-case performance for nearly-sorted 
        or nearly-reverse-sorted data)" -- Stack Overflow
    */
    // let pivotIndex = Math.floor(Math.random() * (arr.length - 1));
    let pivot = arr[low].score;
    let up = low;
    let down = high;

    while (up < down) {
        for (let j = up; j < high; j++) {
            if (arr[up].score < pivot) {
                break;
            }
            up++;
        }
        for (let j = high; j > low; j--) {
            if (arr[down].score > pivot) {
                break;
            }
            down--;
        }
        if (up < down) {
            let temp = arr[up];
            arr[up] = arr[down];
            arr[down] = temp;
        }
        let change = arr[low];
        arr[low] = arr[down];
        arr[down] = change;
    }
}

export { quickSort };
