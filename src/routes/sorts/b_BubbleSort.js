// bubble sort algorithm

// data is a 1D array that holds objects as elements.

// this will return an array from greatest to least score!!!

function bubbleSort2(data) {
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

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let change = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // we swap the items
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j 0+ 1] = temp;
//                 change = 1;
//             }
//         }
//         if (change === 0) {
//             break;
//         }
//     }
// }
