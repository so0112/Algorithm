function solution(dots) {
    const start = dots[0];
    let [x, y] = [0, 0];
    
    for (let i = 1; i < dots.length; i++) {
        if (start[0] === dots[i][0]) {
            y = Math.abs(start[1] - dots[i][1]);        
        }
        
        if (start[1] === dots[i][1]) {
            x = Math.abs(start[0] - dots[i][0]);
        }
    }
    
    return x * y;
}