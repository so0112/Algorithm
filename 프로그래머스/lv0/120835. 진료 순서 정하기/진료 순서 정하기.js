function solution(emergency) {
    let copy = emergency.slice();
    let sorted = copy.sort((a,b) => b - a);
    let rank = sorted.map((el, idx) => ([el, idx + 1]));
    let result = [];    
    
    for (let i = 0; i < rank.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            if (emergency[i] === rank[j][0]) {
                console.log(emergency[i], rank[j][0]);
                result.push(rank[j][1]);
            }
        }
    }
    return result;
}