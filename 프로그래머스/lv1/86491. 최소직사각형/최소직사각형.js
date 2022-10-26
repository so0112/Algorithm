function solution(sizes) {
    let arr = sizes.map(el => el.sort((a, b) => b - a));
    let width = Math.max(...arr.map(el => el[0]));
    let height = Math.max(...arr.map(el => el[1]));
    
    return width * height  
}