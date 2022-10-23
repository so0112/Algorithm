function solution(hp) {
    let result = 0;
    let ants = [5, 3, 1]
    
    for (let i = 0; i < ants.length; i++) {
        result += parseInt(hp / ants[i]);
        hp = parseInt(hp % ants[i]);
    }
    
    return result;
}