const calculator = (num1, operator, num2) => {
    let result = 0;
    
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    }
    
    return result;
}

function solution(quiz) {
   
    
    const splitArr = quiz.map(el => el.split(" "));
    const calArr = splitArr.map(el => calculator(Number(el[0]), el[1], Number(el[2])));
    
    const result = (calArr.map((el, i) => (el === Number(splitArr[i][4])) ? "O" : "X"));
    
    
    return result;
}