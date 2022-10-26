function solution(s) {
    
    let arr = s.split(' ').map((el) => Number(el)).sort((a, b) => a - b);
    
    return arr[0] + ' ' + arr[arr.length - 1];
    
}