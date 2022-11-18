function solution(before, after) {
    let result = after
    
    for (let i = 0; i < before.length; i++) {
        result = result.replace(before[i], "");
    }
    
    return result.length === 0 ? 1 : 0;
}