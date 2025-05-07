function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(
  selection_sort([
    212123434554, 23121, 321, 2, 12, 21, 32, 43, 4, 35, 4, 6568, 6, 9, 9, 8,
    100, 43, 4567898765433, 456, 7, 343, 454, 5, 45, 5, 5, 56, 657, 768, 9, 45,
  ])
);
