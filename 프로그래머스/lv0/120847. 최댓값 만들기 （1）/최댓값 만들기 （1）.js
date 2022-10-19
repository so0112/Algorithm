function solution(numbers) {
    let sorted = numbers.sort((a,b) => b - a);
        return sorted[0] * sorted[1];
    
}