function solution(my_string) {
    
    let arr = my_string.split("");
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i].toUpperCase()) {
            result.push(arr[i].toLowerCase());
        } else if(arr[i] === arr[i].toLowerCase()) {
            result.push(arr[i].toUpperCase());
        }
    }
    return result.join("");
}