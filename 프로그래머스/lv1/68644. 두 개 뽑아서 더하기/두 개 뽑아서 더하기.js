function solution(numbers) {
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        
        for (let j = i + 1; j < numbers.length; j++){
            
            let sum = numbers[i] + numbers[j];
            if (result.indexOf(sum) === -1) result.push(sum)
        }
    }
    
    return result.sort((a,b) => a - b);
}