function anagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^\w]/g, "");
  str2 = str2.toLowerCase().replace(/[^\w]/g, "");
  const obj1 = {};
  const obj2 = {};
  console.log(str1, str2);

  for (let index1 of str1) {
    obj1[index1] = (obj1[index1] || 0) + 1;
  }
  for (let index2 of str2) {
    //// this is also frequency counter
    obj2[index2] = (obj2[index2] || 0) + 1;
  }
  if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}
const check = anagram("Olelh!", "Hello");
console.log(check);
