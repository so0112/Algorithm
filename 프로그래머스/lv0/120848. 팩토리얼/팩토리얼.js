function solution(n) {
    let result = 1;
    let num = 1;
    
    while(result <= n) {
        num++;
        result = result * num;
    }
    return num - 1;
    
}