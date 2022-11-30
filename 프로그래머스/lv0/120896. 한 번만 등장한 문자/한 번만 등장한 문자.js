function solution(s) {
    let obj = {};
    let result = [];
    
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] === undefined ? obj[s[i]] = 1 :  obj[s[i]] += 1;
    }
    
    for (el in obj) {
        if (obj[el] === 1) {
          result.push(el);  
        } 
    }
    return result.sort().join("");
}