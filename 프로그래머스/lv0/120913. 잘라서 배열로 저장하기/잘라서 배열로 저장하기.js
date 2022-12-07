function solution(my_str, n) {
    var answer = [];
    
    let my_arr = my_str.split("");
    let string = "";
    
    for (let el of my_str) {
        string += my_arr.shift();
        
        if (string.length === n) {
            answer.push(string);
            string = "";
        }
        
        if (my_arr.length === 0 && string.length !== 0) {
            answer.push(string);
        }
    }
    
    return answer;
}