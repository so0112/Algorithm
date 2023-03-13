function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    let obj = {};
    
    for (let el of participant) {
        obj[el] === undefined ? obj[el] = 1 : obj[el] += 1;
    }
    
    for (let el of completion) {
        obj[el] -= 1;
    }
    
    for (let key in obj) {
        if (obj[key] === 1) return key;
    }
}