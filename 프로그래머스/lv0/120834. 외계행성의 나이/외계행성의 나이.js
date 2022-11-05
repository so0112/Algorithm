function solution(age) {
    
    const apb = "abcdefghij"
    const result = String(age).split("").map(el => apb[Number(el)]);

    return result.join("");
}