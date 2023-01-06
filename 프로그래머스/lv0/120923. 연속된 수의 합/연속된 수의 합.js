function solution(num, total) {
    let result = [];
    let sum = 0
    
    for (let i = 1; i < num; i++) sum += i;
    
    const x = (total - sum) / num;
    
    for (let i = 0; i < num; i++) {
       result.push(x + i); 
    }
    
    return result;
}