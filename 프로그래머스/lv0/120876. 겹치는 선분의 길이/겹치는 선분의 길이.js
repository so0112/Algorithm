function solution(lines) {
    lines.map(v=>v.sort((a,b)=>a-b))
    let line = {}
    let answer = 0;
    for(let i = 0 ; i<lines.length; i++){
        for(let k = lines[i][0] ; k<lines[i][1]; k++){
            if(line[k]) {
                if(line[k][2] !== 2)answer += 1
                line[k] = [k,k+1,2]
            }else{
                line[k]=[k,k+1,1]    
            }

        }
    }
    return answer
}