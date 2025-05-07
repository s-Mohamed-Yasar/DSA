function countUniqueValues(arr) {
    if (!arr.length) {
        return 0
    }
    let uniqueCount = 1
    let leftPointer = 0
    let rightPointer = 1
    
    while (rightPointer < arr.length) {
        if (!(arr[leftPointer] == arr[rightPointer])) {
            uniqueCount++
        }
        rightPointer++
        leftPointer++
    }
    return uniqueCount
}

console.log(countUniqueValues([1,1,1,2,3,4,5,5,5]));
