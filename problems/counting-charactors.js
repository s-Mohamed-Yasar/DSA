function count(string) {
  let str = string.toLowerCase();
  let finalRsult = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i]; //this is also frequency counter
    if (/[^a-zA-Z0-9]/g.test(currentChar)) continue;
    finalRsult[currentChar] = (finalRsult[currentChar] || 0) + 1;
  }
  return finalRsult;
}
console.log(count("Mohamed !@##$%$%$^%&^*&yasar"));
