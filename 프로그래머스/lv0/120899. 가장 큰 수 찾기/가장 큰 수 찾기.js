function solution(array) {
    let max = Math.max(...array);
    let maxIdx = array.indexOf(max);
    
    return [max, maxIdx];
}