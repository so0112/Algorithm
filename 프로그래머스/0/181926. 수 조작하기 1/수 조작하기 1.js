function solution(n, control) {
    
    const obj = {"w" : 1, "s" : -1, "d" : 10, "a" : -10};
    
    var answer = n;
    
    for (let i = 0; i < control.length; i++) {
        answer += obj[control[i]];
    }
    
    return answer;
}