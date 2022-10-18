function solution(s1, s2) {

    let result = s1.filter(el => s2.includes(el))
    
    return result.length
}