function solution(s){
    let [cntP, cntY] = [0, 0];
    let diff = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") cntP += 1;
        if (s[i] === "y" || s[i] === "Y") cntY += 1;
    }
    
    diff = cntP - cntY;
    
    return diff === 0 ? true : false;
}