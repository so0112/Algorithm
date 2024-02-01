function solution(arr) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        if (arr[i] >= 50 && arr[i] % 2 === 0) num = arr[i]/ 2;
        else if (arr[i] <= 50 && arr[i] % 2 !== 0) num = arr[i] * 2;
        
        answer.push(num)
    }
    return answer;
}