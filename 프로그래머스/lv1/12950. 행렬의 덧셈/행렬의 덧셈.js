function solution(arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        
        let el = [];
        
        for (let j = 0; j < arr1[0].length; j++) {
       
            el.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(el);
    }
    
    return result;
}