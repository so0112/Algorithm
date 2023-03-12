// 소수 판별 함수
function findPrimeNum(num) {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0 || num % 2 === 0) return false;
    }
    return true;
}

function solution(n) {
    if (n < 2) return 0;
    
    let cnt = 1;
    for (let i = 3; i <= n; i += 2) {
        if(findPrimeNum(i)) cnt++;
    }
    return cnt;
}