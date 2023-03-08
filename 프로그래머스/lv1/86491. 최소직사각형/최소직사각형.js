function solution(sizes) {
    let [w, h] = [0, 0];
    let sort = sizes.map((el) => el.sort((a, b) => a - b));
    
    
    for (let i = 0; i < sort.length; i++) {
        if (w < sort[i][0]) w = sort[i][0];
        if (h < sort[i][1]) h = sort[i][1];
    }
    
    return w * h;
}