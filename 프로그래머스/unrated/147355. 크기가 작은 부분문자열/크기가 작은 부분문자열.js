function solution(t, p) {
    let cnt = 0;
    const len = p.length;
    
    for (let i = 0; i <= t.length - len; i++) {
        let slice = t.slice(i, i + len); 
        if (slice <= p) cnt++;
    }

    return cnt;
}