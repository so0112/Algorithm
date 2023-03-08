function solution(s) {
    let arr = s.split("");
    
    arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
    
    return arr.join("");
}