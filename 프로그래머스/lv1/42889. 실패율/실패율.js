// 실패율 === 스테이지 도달 했는데 클리어 못 한 사람 수 / 스테이지 도달한 플레이어

// 실패율 높은 스테이지부터 내림차순 배열 반환
function solution(N, stages) {
    
    let FailureRate = [];
    
    for (let i = 0; i < N; i++) {
        let players = stages.filter(el => el >= i + 1).length;
        let stoppedPlayers = stages.filter(el => el === i + 1).length;
        FailureRate.push([i + 1, stoppedPlayers / players]);
    }
    
    FailureRate.sort((a, b) => b[1] - a[1]);
    
    return FailureRate.map(el => el[0]);
}