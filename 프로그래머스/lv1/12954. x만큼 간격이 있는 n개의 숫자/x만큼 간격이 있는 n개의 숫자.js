function solution(x, n) {
    let answer = [];
    let num = 0;
    
    for (let i = 1; i <= n; i++) {
        num += x;
        answer.push(num);
    }
    return answer;
}