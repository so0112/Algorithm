function solution(array) {
    let sorted = array.sort((a, b) => a - b);
    
    return sorted[parseInt(sorted.length / 2)]
}