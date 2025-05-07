// naive approch
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const currentNum = arr1[i];

      const index = arr2.indexOf(currentNum * currentNum);
      if (index == -1) return false
      arr2.splice(index, 1);

  }
  return true;
}
const fun = same([1, 2, 3,2], [4, 1, 9, 4]);
console.log(fun);


// || this is the code which has bog O of O(n)
// \/
 
function samee(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequency1 = {};
  const frequency2 = {};

  for (let num of arr1) {
    frequency1[num] = (frequency1[num] || 0) + 1;
  }

  for (let num of arr2) {
    frequency2[num] = (frequency2[num] || 0) + 1;
  }

  for (let key in frequency1) {
    const squared = key ** 2;
    if (!(squared in frequency2)) return false;
    if (frequency2[squared] !== frequency1[key]) return false;
  }

  return true;
}

const func = samee([1, 2, 3], [1, 4, 9]);
console.log(func); 
