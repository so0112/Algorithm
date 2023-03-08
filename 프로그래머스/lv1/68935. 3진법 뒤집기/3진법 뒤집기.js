function solution(n) {
    
    let reverseBase3 = "";
    
    while (n > 0) {
        reverseBase3 += n % 3;
        n = Math.floor(n / 3);    
    }

    return parseInt(reverseBase3, 3);
}