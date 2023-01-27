function solution(n) {
    let nCountOne = n.toString(2).replaceAll("0", "").length;
    let result = n;
    let resultCountOne;
    
    while (resultCountOne !== nCountOne) {
        result++;
        resultCountOne = result.toString(2).replaceAll("0", "").length;  
    }
    return result;
}