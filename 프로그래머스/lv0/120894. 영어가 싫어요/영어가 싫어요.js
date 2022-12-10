function solution(numbers) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    
    arr.forEach((el, i) => numbers = numbers.replaceAll(el, i))
    return Number(numbers);
}