function solution(participant, completion) {
    const obj = {};
    
    for (let p of participant) {
        if (!obj[p]) obj[p] = 1;
        else obj[p] += 1;
    }
    
    for (let c of completion) {
        obj[c] -= 1;
    }
    
    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
}