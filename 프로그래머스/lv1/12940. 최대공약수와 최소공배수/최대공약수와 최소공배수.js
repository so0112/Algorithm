function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function solution(n, m) {
    let GCD = gcd(n, m);
    let LCM = (n * m) / GCD;
    
    return [GCD, LCM];
}