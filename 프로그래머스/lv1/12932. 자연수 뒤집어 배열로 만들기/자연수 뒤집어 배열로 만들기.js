function solution(n) {
    let answer = [];
    let string = String(n);
    
    for (let i = string.length - 1; i >= 0; i--) {
        answer.push(Number(string[i]));
    }
    return answer;
}