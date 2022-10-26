// 문제 가장 많이 맞힌 사람 return
// 공동 1등일 경우 같이 return

// [1, 2, 3, 4, 5]

// answers의 길이가 0이되면 return 하도록

let supo1 = [1, 2, 3, 4, 5],
    supo2 = [2, 1, 2, 3, 2, 4, 2, 5],
    supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    score = [0, 0, 0],
    result = [];

function solution(answers) {
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === supo1[i % 5]) {score[0]++;}
        if (answers[i] === supo2[i % 8]) {score[1]++;}
        if (answers[i] === supo3[i % 10]) {score[2]++;}
    }
    console.log(score)
    for (let i = 0; i < score.length; i++){
        if (score[i] === Math.max(...score)){
               result.push(i + 1);  
        }
    }
    return result;
}