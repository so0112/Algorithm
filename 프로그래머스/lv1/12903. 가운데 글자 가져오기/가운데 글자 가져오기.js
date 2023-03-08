function solution(s) {
    let strLen = s.length;
    
    if (strLen % 2 !== 0) {
        return s[Math.floor(strLen / 2)];
    } else {
        return s[strLen / 2 - 1] + s[strLen / 2];
    }
}