function solution(slice, n) {
    let pizza = n / slice 
    
    return pizza % 1 === 0 ? pizza : parseInt(pizza + 1);
}