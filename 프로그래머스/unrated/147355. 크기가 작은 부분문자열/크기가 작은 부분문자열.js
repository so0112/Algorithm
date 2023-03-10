function solution(t, p) {
    let cnt = 0;
    let len = p.length;

    for (let i = 0; i <= t.length - len; i++) {
        let num = t.slice(i, i + len);
        if (num <= p) cnt++;
    }
    
    return cnt;
}