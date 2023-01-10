const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const result = [];
const chess = [1, 1, 2, 2, 2, 8];
const A = input;

for (let i = 0; i < chess.length; i++) {
  result.push(chess[i] - A[i]);
}

console.log(result.join(" "));
