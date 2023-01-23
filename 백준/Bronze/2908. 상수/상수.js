const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

const arr = input.reverse();

const numArr = arr
  .join("")
  .split(" ")
  .map((el) => Number(el))
  .sort();

console.log(Number(numArr[1]));
