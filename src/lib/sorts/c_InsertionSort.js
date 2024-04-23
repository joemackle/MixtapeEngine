// insertion sort algorithm

// data is a 1D array that holds objects as elements.

// this will return an array from greatest to least score!!!
function insertionSort(data) {
  for (let i = 1; i < data.length; i++) {

    let key = data[i];
    let j = i - 1;

    while (key.score > data[j].score && j > 0) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = key;
  }
}

export { insertionSort };
