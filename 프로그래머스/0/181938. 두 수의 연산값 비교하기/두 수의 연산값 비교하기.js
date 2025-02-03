function solution(a, b) {
    let str = String(a) + String(b);
    
    var answer = str >= 2 * a * b ? str : 2 * a * b;
    
    return Number(answer);
}