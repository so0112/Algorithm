function solution(s) {
    let result = [];
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.indexOf(s[i]) === -1) {
            result.push(-1);
        } else result.push(i - stack.lastIndexOf(s[i]));
        
        stack.push(s[i]);
    }
    return result;
}