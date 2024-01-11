function solution(k, score) {
    var answer = [];
    
    score.forEach((item, idx) => {
        let min = score.slice(0, idx + 1).sort((a, b) => b - a).slice(0, k).pop();
        answer.push(min);
        })
    return answer;
}