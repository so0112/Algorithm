function solution(dots) {
    const findSlope = (x1, y1, x2, y2) => {
        return (y1 - y2) / (x1 - x2);
    }
    
    if (findSlope(...dots[0], ...dots[1]) === findSlope(...dots[2], ...dots[3])) {
        return 1;
    }
     if (findSlope(...dots[0], ...dots[2]) === findSlope(...dots[1], ...dots[3])) {
        return 1;
    }
     if (findSlope(...dots[0], ...dots[3]) === findSlope(...dots[1], ...dots[2])) {
        return 1;
    }
    
    
    
    return 0;
}