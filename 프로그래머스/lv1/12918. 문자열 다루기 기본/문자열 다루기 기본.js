function solution(s) {
    let reg = /^[0-9]+$/;
    let len = s.length;
    
    return len !== 4 && len !== 6 ? false : reg.test(s);
}