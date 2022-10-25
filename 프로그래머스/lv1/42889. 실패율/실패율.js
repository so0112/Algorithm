// N : 최대 스테이지
// stages : 플레이어들이 현재 어떤 스테이지에 있는 지 담긴 배열

// N까지 반복문을 돌면서 각 스테이지를 얼만큼 넘겼나 확인 객체 값으로 담기


const   result = [];

function solution(N, stages) {
    
    
    for (let i = 1; i <= N; i++){
        
       let curStage = stages.filter((el) => el === i).length;
       let passStage = stages.filter((el) => el >= i).length;
        
        result.push([i, (curStage / passStage)])
    }
    console.log(result)
    result.sort((a, b) => b[1] - a[1]);
    
    return result.map((el) => el[0]);
}