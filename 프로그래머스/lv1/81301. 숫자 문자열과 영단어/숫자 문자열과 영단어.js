function solution(s) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (let i = 0; i < arr.length; i++){
        s = s.replaceAll(arr[i], i);
    }
    return Number(s);
}