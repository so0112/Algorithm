function solution(numbers) {
    let answer;
        
    const stringArr = numbers.map(el => String(el));
    
    answer = stringArr.sort((a,b) => (b+a) - (a+b)).join("");

    return answer[0] === "0" ? "0" : answer;
}