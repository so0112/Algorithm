function solution(rsp) {
    let result = "";
    
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === "2") result += "0";
        if (rsp[i] === "5") result += "2";
        if (rsp[i] === "0") result += "5";
    }
    
    return result;
}