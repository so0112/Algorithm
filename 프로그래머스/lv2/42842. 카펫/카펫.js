function solution(brown, yellow) {
    const yWL = [];
    const area = brown + yellow;
    
    
    for (let i = yellow; i > 0; i--) {
        if (yellow % i === 0) yWL.push([i, yellow / i]);
    }
    
    for (let i = 0; i < yWL.length; i++) {
        
        let width = (yWL[i][0] + 2);
        let length = (yWL[i][1] + 2);
        
        if (area === (width * length)) return [width, length];
    }  
}