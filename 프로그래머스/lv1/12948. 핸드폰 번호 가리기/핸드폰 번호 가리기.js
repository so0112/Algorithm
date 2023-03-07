function solution(phone_number) {
    let masking = phone_number.length - 4;
    let num = phone_number.slice(-4);
    
    return "*".repeat(masking) + num;
}