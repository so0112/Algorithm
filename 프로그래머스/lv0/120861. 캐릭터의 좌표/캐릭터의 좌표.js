function solution(keyinput, board) {
    const result = [0, 0];
    const [width, height] = [parseInt(board[0] / 2), parseInt(board[1] / 2)]
    
    keyinput.forEach((v, i) => {
        
        if (v === "left" && result[0] > -width) result[0] -= 1;
        
        if (v === "right" && result[0] < width) result[0] += 1;
        
        if (v === "up" && result[1] < height) result[1] += 1;
        
        if (v === "down" && result[1] > -height) result[1] -=1;
    })
    
    return result;
}