function solution(numbers, direction) {
    
    if (direction === "right") {
        let last = numbers.pop(numbers[numbers.length - 1]);
        numbers.unshift(last)
        
        
    } else if (direction === "left") {
        let first = numbers.shift(numbers[0]);
        numbers.push(first);
    }
    
    return numbers;
}