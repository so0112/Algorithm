function solution(numbers, k) {
    let index = 0;
    let length = numbers.length;
    
    for (let i = 1; i < k; i++) {
        index += 2;
    }
    
    return numbers[(index % length)];
}