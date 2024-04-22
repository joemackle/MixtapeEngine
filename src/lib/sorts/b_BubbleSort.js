// bubble sort algorithm

// data is a 1D array that holds objects as elements.

// this will return an array from greatest to least score!!!

function bubbleSort(data) {
  for (let i = 0; i < data.length; i++) {
    let change = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[j].score < data[j + 1].score) {
        // we swap the items
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
        change += 1;
      }
    }
    if (change === 0) {
      break;
    }
  }
}

export { bubbleSort };
