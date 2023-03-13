function solution(dartResult) {
    
    // 문자열 분리
    
    let str = "";
    let arr = [];
    
    for (let i = 0; i < dartResult.length; i++){
        str += dartResult[i];
        
        let num1 = Number(dartResult[i]);
        let num2 = Number(dartResult[i + 1]);
        
        if (isNaN(num1) && isNaN(num2) === false){
            arr.push(str);
            str = "";
        }
    }
    arr.push(str);
    
    
    // 계산
    let pointArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let tmp = "";
        
        for (let j = 0; j < arr[i].length; j++)  {
            // 숫자
            if (isNaN(Number(arr[i][j])) === false) {
                tmp += arr[i][j]
            }
            
            // 제곱
            if (arr[i][j] === "S") pointArr.push(Number(tmp));
            else if (arr[i][j] === "D") pointArr.push(Number(tmp) ** 2);
            else if (arr[i][j] === "T") pointArr.push(Number(tmp) ** 3);
            
            // 보너스
            if (arr[i][j] === "*") {
                for (let k = i - 1; k <= i; k++) {
                    pointArr[k] *= 2;
                }
            } else if (arr[i][j] === "#") {
                pointArr[i] *= -1;
            }
        }
    }
    
    return pointArr.reduce((acc, cur) => acc + cur, 0);
}
