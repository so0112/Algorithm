function solution(my_string) {
    const arr = my_string.split(" ");
    const strArr = [arr[0]];
    
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+" || arr[i] === "-") {
            strArr.push(arr[i] + arr[i + 1]);
        } 
    }
    
    const numArr = strArr.map(el => Number(el));
    
    return numArr.reduce((acc, cur) => acc + cur);
}