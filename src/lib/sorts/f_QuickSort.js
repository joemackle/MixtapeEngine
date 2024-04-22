// quick sort algorithm

// call this function like this...
// quickSort(data, 0, data.length-1);
function quickSort(arr, low, high) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, (pivot - 1));
        quickSort(arr, (pivot + 1), high);
    }
}

function partition(arr, low, high) {
    // here we are selecting a pivot at random in the 114,000 length data array.
    /*  
        "Choosing a random pivot minimizes the chance that you will 
        encounter worst-case O(n2) performance (always choosing first or last 
        would cause worst-case performance for nearly-sorted 
        or nearly-reverse-sorted data)" -- Stack Overflow
    */
    let pivot = arr[low];
}