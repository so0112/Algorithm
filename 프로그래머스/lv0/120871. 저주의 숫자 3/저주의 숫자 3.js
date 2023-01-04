function solution(n) {
    const arr = [];
    let num = 1;
    
    while (arr.length !== 100) {
        if (num % 3 !== 0 && String(num).indexOf(3) === -1) {
            arr.push(num);
        }
        num++;
    }    
    return arr[n - 1];
}