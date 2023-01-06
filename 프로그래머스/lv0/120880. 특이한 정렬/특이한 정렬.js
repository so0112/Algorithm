function solution(numlist, n) {
    
    return numlist.sort((a, b) => {
        return Math.abs(a - n) - Math.abs(b - n) || b - a;
    })
}