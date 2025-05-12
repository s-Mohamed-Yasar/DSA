var singleNumber = function (nums) {
  let frequency = {};

  for (let i of nums) {
    frequency[i] = (frequency[i] || 0) + 1;
  }
  const key = Object.keys(frequency).find((key) => frequency[key] === 1);
  return Number(key);
};
console.log(singleNumber([4, 1, 2, 1, 2]));
