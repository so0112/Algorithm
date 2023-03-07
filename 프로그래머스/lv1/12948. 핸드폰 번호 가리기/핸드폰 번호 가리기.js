function solution(phone_number) {
    let numLen = phone_number.length;
    let num = phone_number.slice(-4)
    
    return "*".repeat(numLen - 4) + num;
}