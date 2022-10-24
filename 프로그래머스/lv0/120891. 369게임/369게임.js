function solution(order) {
    let arr = String(order).split("").filter(el => el === "3" || el === "6" || el === "9");
    
    return arr.length;
}