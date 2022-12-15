function solution(sides) {
    const sorted = sides.sort((a, b) => b - a);
    const result = [];
    
    // x가 가장 긴 변일 경우
    for (let i = sorted[0] + 1; i < sorted[0] + sorted[1]; i++) {
        result.push(i);
    } 
    
    // sorted[0]이 가장 긴 변일 경우
    for (let i = sorted[0] - sorted[1]; i < sorted[0]; i++) {
        result.push(i);
    }
    
    return result.length;
}