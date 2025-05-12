function insertionSort(arr) {
    for (let i = 1; i < arr.length ; i++){
        if (arr[i] >= arr[i - 1]) continue
        const value = arr[i];
        arr.splice(i,1)
        for (let j = 0; j < i; j++) {
            if (arr[j] >= value) {
                arr.splice(j, 0, value)
                break
            }
        }
    }
    return arr
}
console.log(insertionSort([
  212123434554, 23121, 321, 2, 12, 21, 32, 43, 4, 35, 4, 6568, 6, 9, 9, 8, 100,
  43, 4567898765433, 456, 7, 343, 454, 5, 45, 5, 5, 56, 657, 768, 9, 45,
])
);


// if (arr[j] >= arr[i]) {
//                 arr.splice(j - 1, 0, arr[i])

//             }
//             break