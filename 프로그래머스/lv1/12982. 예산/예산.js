function solution(d, budget) {
    let sortedD = d.sort((a,b) => a - b)
    let cnt = 0;
    
    for (let i = 0; i < d.length; i++){
        if (budget < sortedD[i]){
            return cnt;
        }
        budget -= sortedD[i];
        cnt ++;
    }
    return cnt;
}