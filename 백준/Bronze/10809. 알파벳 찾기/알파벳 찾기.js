const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for (let i = 0; i < alphabet.length; i++) {
  result += input.indexOf(alphabet[i]) + " ";
}

console.log(result);
