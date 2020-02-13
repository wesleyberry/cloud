// techsith tricky JS interview questions
const ary = [1, 2, 15, 30, 5, 45, 7];

console.log(ary.sort((a, b) => a - b));

let x = [1, 2, 3];
let y = [4, 5, 6];
let z = x.concat(y);
console.log(z);

let numArr = [1, 2, 5, 4, 10, 25, 15];
let highestNum = arr => arr.sort((a, b) => b - a)[0];
console.log(highestNum(numArr));

let isPali = str => str === str.split('').reverse().join('');
console.log(isPali('racecar'));
console.log(isPali('racecat'));