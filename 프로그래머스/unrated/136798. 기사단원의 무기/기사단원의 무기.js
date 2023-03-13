function solution(number, limit, power) {
    
    function countDivisors(num) {
        let count = 0;
    
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                count += (i === Math.sqrt(num)) ? 1 : 2;
            }
        }
        return count > limit ? power : count;
    }
    
    let arr = [];
    for (let i = 1; i <= number; i++) {
        let weapon = countDivisors(i);
        arr.push(weapon);
    }
    return arr.reduce((acc, cur) => acc + cur, 0);
}