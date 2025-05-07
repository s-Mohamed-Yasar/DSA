function divide_and_conquer(arr, aim) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle);
    if (aim < arr[middle]) {
      right = middle - 1;
      console.log("right point", right);
    } else if (aim > arr[middle]) {
      left = middle + 1;
      console.log("left point", left);
    } else {
      console.log("num has found", arr[middle]);
      return;
    }
  }
}
divide_and_conquer([1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8], 8);
