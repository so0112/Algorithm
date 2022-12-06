function solution(my_string) {
    let reg = /[^0-9]/gi;
    // my_string = my_string.replaceAll(reg, "0");
    
    let arr = (my_string).split(reg);
    let result = arr.map(el => Number(el));
    
    return result.reduce((acc, cur) => acc + cur)
}