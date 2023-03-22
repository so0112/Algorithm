function solution(t, p) {
    const arr = [];
    const len = p.length;
    
    
    for (let i = 0; i <= t.length - len; i++) {
        let slice = t.slice(i, i + len);
        arr.push(slice);
    }
    const filteredArr = arr.filter(el => Number(el) <= Number(p));
    return filteredArr.length;
}