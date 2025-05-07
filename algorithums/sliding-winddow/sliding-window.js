function slidingWindow(arr, howlong) {
  if (howlong > arr.length || howlong <= 0) {
    console.log("Invalid window size");
    return;
  }

  let wholeTotal = 0;
  let total = 0;

  for (let i = 0; i < howlong; i++) {
    total += arr[i];
  }
  wholeTotal = total;

  for (let j = howlong; j < arr.length; j++) {
    total = total - arr[j - howlong]; 
    total += arr[j]; 
    if (total > wholeTotal) {
      wholeTotal = total;
    }
}
console.log(wholeTotal);
}
slidingWindow([1, 2, 5, 2, 8, 3, 5], 2);
