function solution(s) {
    let len = s.length;
    
    if (len !== 4 && len !== 6) return false;
    
    for (let i = 0; i < len; i++) {
        let num = Number(s[i]);
        if (isNaN(num)) return false;
    }
    
    return true;
}