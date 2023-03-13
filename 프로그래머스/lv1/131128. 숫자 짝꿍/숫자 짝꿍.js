function solution(X, Y) {
    
    // 0 ~ 9 숫자 카운트
    let xobj = {};
    let yobj = {};

    for (let i = 0; i < X.length; i++) {
        xobj[X[i]] === undefined ? xobj[X[i]] = 1 : xobj[X[i]] += 1;
    }
    
    for (let i = 0; i < Y.length; i++) {
        yobj[Y[i]] === undefined ? yobj[Y[i]] = 1 : yobj[Y[i]] += 1;
    }
    
    // 공통값 추출
    let obj = {}
    for (let i = 9; i >= 0; i--) {
        if(xobj[i] !== undefined && yobj[i] !== undefined) {
            obj[i] = xobj[i] >= yobj[i] ? yobj[i] : xobj[i];
        }
    }
    
    let keys = Object.keys(obj);
    keys.sort((a, b) => b - a);
    
    for (let i = 0; i < keys.length; i++) {
        keys[i] = keys[i].repeat(obj[keys[i]]);
    }
    
    let result = keys.join("");
    
    if (result.length === 0) return "-1";
    else if (Number(result) === 0) return "0";
    return result;
}