function solution(k, m, score) {
    
    let sum = 0;
    let box = [];
    let len = score.length;
    
    score.sort((a, b) => a - b);
    
    for (let i = 0; i < len; i++) {

        box.push(score.pop());
        
        if (box.length === m) {
            let price = m * box[m - 1];
            sum += price;
            box = [];
        }
    }
    
    return sum; 
}