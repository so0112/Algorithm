function solution(numbers) {
    const sorted = numbers.sort((a,b) => a - b);
    const left = numbers[0] * numbers[1];
    const right = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
    return left > right ? left : right;
}