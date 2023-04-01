function solution(a, b, n) {
    
    let bottle = 0
    
    while(n >= a) {
        let change = Math.floor(n / a) * b;
        bottle += change
        n = change + n % a
    }
    return bottle
}