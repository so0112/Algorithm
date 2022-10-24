function solution(box, n) {
    let arr = box.map(el => Math.floor(el / n));
    
    return arr.reduce((acc, cur) => acc * cur);    
}