function solution(a, b) {
    let sum = 0;
    let arr = [a, b].sort((a, b) => a - b);
    
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    
    return sum;
}