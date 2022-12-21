function solution(chicken) {
    let coupon = chicken;
    let bonus = 0;
    
    while (coupon >= 10) {
        bonus += parseInt(coupon / 10);
        coupon = parseInt(coupon % 10 + coupon / 10);
    }
    
    return bonus;
}