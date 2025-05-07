function twoPointers(arr){
    let left = 0;
    let right = arr.length - 1;

    while (right > left) {
        const sum = arr[left] + arr[right] 
        if (sum > 0 ) {
            right--
        }
        else if (sum < 0) {
            left++
        }
        if (sum == 0) return 'match'

    }
return ["no match"];
}
const rresult = twoPointers([-5, -3, -1, 0,1, 2, 4, 4, 8, 10, 12]);
console.log(rresult);
