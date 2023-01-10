const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cnt = 0;
const num = input[2];

const arr = input[1].split(" ");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    cnt++;
  }
}

console.log(cnt);
