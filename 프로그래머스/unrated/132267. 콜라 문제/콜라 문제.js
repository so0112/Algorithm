function solution(a, b, n) {
    // 빈 병 n 개 있음
    // 빈 병 a 개 가져가면 콜라 b 병 준다
    
    let result = 0;
    
    while (n >= a) {
        let newCoke = Math.floor(n / a) * b;
        n = n % a;
        n += newCoke;
        result += newCoke;
    }
    
    return result;
}