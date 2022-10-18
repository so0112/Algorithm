function solution(denum1, num1, denum2, num2) {
    
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    
    function findGcd(a, b) {
        if (b === 0) return a;
        return findGcd(b, a % b);
    }
    
    let gcd = findGcd(denum, num);
    
    return [denum / gcd, num / gcd]
}