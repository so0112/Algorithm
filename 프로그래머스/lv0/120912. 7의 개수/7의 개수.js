function solution(array) {
    let num = array.join("");
    let result = num.replace(/[^7]/g, "");
    
    return result.length;
}