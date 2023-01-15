
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase().split("");
let alpha = input.filter((el, idx) => input.indexOf(el) === idx);
let count = new Array(alpha.length).fill(0);

for (let i = 0; i < input.length; i++) {
  count[alpha.indexOf(input[i])]++;
}

let max = count[0];

for (let j = 1; j < count.length; j++) {
  if (max < count[j]) max = count[j];
}

if (count.filter((el) => el === max).length > 1) console.log("?");
else {
  console.log(alpha[count.indexOf(max)].toUpperCase());
}