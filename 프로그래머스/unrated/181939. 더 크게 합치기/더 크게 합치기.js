function solution(a, b) {
    const sum1 = Number(String(a) + String(b))
    const sum2 = Number(String(b) + String(a));
    
    return  sum1 > sum2 ? sum1 : sum2;
}