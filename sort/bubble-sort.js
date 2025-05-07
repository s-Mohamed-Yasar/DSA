function bubble(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

console.log(
  bubble([
    212123434554, 23121, 321, 2, 12, 21, 32, 43, 4, 35, 4, 6568, 6, 9, 9, 8,
    100, 43, 4567898765433, 456, 7, 343, 454, 5, 45, 5, 5, 56, 657, 768, 9, 45,
  ])
);
