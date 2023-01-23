const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const arr = input.split(" ");

if (arr[0] === "") {
  console.log(0);
} else {
  console.log(arr.length);
}
