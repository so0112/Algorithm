// 각 자릿수 합 구하기 sum, num
// 
function solution(x) {
    let num = x;
    let sum = 0;
    
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    
    return x % sum === 0 ? true : false;
}