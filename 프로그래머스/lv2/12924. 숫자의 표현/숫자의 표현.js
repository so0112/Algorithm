// 홀수일 경우, 짝수일 경우

function solution(n) {
    let result = 0;
    
    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) result++;
    }
    
    return result;
}