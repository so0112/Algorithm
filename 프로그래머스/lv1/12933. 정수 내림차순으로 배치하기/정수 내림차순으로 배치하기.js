function solution(n) {
    let arr = String(n).split("");
    
    arr.sort((a, b) => b - a);
    
    return Number(arr.join(""));
}