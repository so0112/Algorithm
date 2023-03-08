function solution(s, n) {
    
    let result = "";
    
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let upper = alpha.toUpperCase();
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            result += " ";
        } else if (s[i] === s[i].toLowerCase()) {
            result += alpha[((alpha.indexOf(s[i])) + n) % 26];
        } else {
            result += upper[((upper.indexOf(s[i])) + n) % 26];
        }
    }
    
    return result;
}