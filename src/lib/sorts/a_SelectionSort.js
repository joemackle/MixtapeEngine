// selection sort algorithm

// data is a 1D array that holds objects as elements.

// this will return an array from greatest to least score!!!
function selectionSort(data) {
    for (let i = 0; i < data.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            // the condiction in the inner loop is in descending order
            if (data[j].score > data[maxIndex].score) {
                maxIndex = j;
            }
        }
        let temp = data[maxIndex];
        data[maxIndex] = data[i];
        data[i] = temp;
    }
}

export { selectionSort };
