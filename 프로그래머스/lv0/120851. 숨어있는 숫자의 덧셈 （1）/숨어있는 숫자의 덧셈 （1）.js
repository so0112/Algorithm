function solution(my_string) {
    let regex = /[^0-9]/g;
    let num = my_string.replace(regex, "");
    let result = 0;
    
    for (let i = 0; i < num.length; i++){
        result = result + Number(num[i]);
    } 
    return result;
}