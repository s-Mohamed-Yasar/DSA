function recursion(num) { //factorial
    if (num == 0) return 1
    return num * recursion(num - 1)
}
console.log(recursion(3));




function findOdds(arr) {
    var newArr = []
    if (arr.length == 0) return newArr
    if (arr[0] % 2 !== 0) {
        newArr = [...newArr, arr[0]]
    }
    newArr = newArr.concat(findOdds(arr.splice(1)))
    return newArr

}
// console.log(findOdds([3432, 231, 3232, 43343]));
