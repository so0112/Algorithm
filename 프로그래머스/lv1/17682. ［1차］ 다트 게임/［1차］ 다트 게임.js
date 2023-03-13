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
            if (isNaN(Number(arr[i][j])) === false) {
                tmp += arr[i][j]
            }
            
            if (arr[i][j] === "S") pointArr.push(Number(tmp));
            else if (arr[i][j] === "D") pointArr.push(Number(tmp) ** 2);
            else if (arr[i][j] === "T") pointArr.push(Number(tmp) ** 3);
            
            if (arr[i][j] === "*") {
                for (let k = i - 1; k <= i; k++) {
                    pointArr[k] *= 2;
                }
            } else if (arr[i][j] === "#") {
                pointArr[i] *= -1;
            }
        }
    }
    
    let result = 0;
    for (let i = 0; i < pointArr.length; i++) {
        result += pointArr[i];
    }
    console.log(pointArr);
    
    return result;
}
