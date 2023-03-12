function solution(N, stages) {
    let players = {}; 
    let totalPlayers = stages.length; 

    for (let i = 1; i <= N + 1; i++) {
        players[i] = stages.filter(el => el === i).length;
    }
    
    let failureRates = [];
    for (let i = 1; i <= N; i++) {
        if (players[i] === 0) {
            failureRates.push([i, 0]);
        } else {
            let failureRate = players[i] / totalPlayers;
            failureRates.push([i, failureRate]);
            totalPlayers -= players[i];
        }
    }
    
    failureRates.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0]; 
        else return b[1] - a[1];
    });
    
    return failureRates.map(el => el[0]);
}