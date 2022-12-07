function solution(n) {
    let answer = [];
    
    let obj = {};
    let divide = 2;
    
    while (n > 1){
        if(n % divide === 0){
            n /= divide;
            obj[divide] = 1;
            divide = 2;
        } else {
            divide++;
        }
    }
    
    for (let el in obj) {
        answer.push(Number(el));
    }
    return answer;
}