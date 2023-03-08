function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let len = d.length;
    let cnt = 0;

    while (budget > 0 && cnt !== len) {
        budget -= d[cnt];
        cnt++;
    }
    
    if (budget < 0) cnt--;
        
    return cnt;
}