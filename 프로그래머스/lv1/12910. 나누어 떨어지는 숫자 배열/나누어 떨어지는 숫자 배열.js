function solution(arr, divisor) {
    const result = []; 
    
    for (let el of arr) {
        if (el % divisor === 0) result.push(el);
    }
    
    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}