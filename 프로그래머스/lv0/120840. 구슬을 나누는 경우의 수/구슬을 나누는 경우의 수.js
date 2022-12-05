function solution(balls, share) {
    
    var answer = 0;
    
    const n = balls;
    const r = share;
    
    let permutation = 1;
    for (let i = n; i >= n-r+1; i--) {
        permutation *= i;
    }
    
    let denominator = 1;
    for (let i = r; i > 1; i--) {
        denominator *=i;
    }
    
    answer = Math.floor(permutation / denominator);
    return answer;
}