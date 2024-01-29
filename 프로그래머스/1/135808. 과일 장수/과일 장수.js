function solution(k, m, score) {
    var answer = 0;
    const arr = [];
    score.sort((a, b) => b - a);
    
    for (let i = 0; i < score.length / m; i++) {
        arr.push(score.slice(i * m, i * m + m).sort());
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= m) {
            answer += arr[i][0] * m
        } 
    }
    
    return answer;
}