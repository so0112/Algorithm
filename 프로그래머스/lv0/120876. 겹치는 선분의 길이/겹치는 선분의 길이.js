function solution(lines) {
    let line = {}
    let answer = 0;
    
    for(let i = 0; i < lines.length; i++){
        for(let j = lines[i][0]; j < lines[i][1]; j++){
            if (line[j]) {
                if(line[j][1] !== 0) {
                    answer += 1;
                    line[j] = [j, 0]
                }
            } else {
                line[j]=[0]    
            }

        }
    }
    console.log(line);
    return answer;
}