function solution(lines) {
    const obj = {};
    
    for (let i = 0; i < lines.length; i++){
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            if (obj[j]) {
                obj[j] = "o"
            } else {
                obj[j] = "x"
            }
        }
    }
    return Object.values(obj).filter((el) => el === "o").length;
}