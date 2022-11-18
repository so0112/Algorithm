function solution(i, j, k) {
    let cnt = 0;
    
    for (let num = i; num <= j; num++) {
        cnt += String(num).split("").filter((el) => Number(el) === k).length;
        }
    return cnt;
}