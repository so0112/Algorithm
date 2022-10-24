function solution(my_string) {
    let regex = /[^0-9]/g;
    let arr = my_string.replace(regex, "").split("");
    arr.sort((a,b) => a - b);
    
    return arr.map(el => Number(el));
    
}