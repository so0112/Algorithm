function solution(ingredient) {
    let hambuger = [1, 2, 3, 1];
    let stack = [];
    let result = 0;
    
    
    for (let i = 0; i < ingredient.length; i++) {        
        stack.push(ingredient[i]);
        
        let check = stack.slice(-4);
        
        if (check[0] === 1 && check[1] === 2 && check[2] === 3 && check[3] === 1) {
            result++;
            for (let i = 0; i < 4; i++) {
                stack.pop();
            }
        }
        
        

    }
    return result;
}