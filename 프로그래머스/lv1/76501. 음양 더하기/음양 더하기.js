function solution(absolutes, signs) {
    const arr = [];
    
    for (let i = 0; i < signs.length; i++ ){
        arr.push(absolutes[i] * (signs[i] ? 1 : -1))
    }
    
    return arr.reduce((acc, cur) => acc + cur)
}