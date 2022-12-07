function solution(s) {
    let answer = 0;
    let arr = s.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] === "Z" || arr[i] === "Z") {
            continue;
        }
        
        answer += Number(arr[i]);
    }
    return answer;
}