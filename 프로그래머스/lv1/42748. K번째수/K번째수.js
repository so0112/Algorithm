function solution(array, commands) {
    const result = [];
    
    function findNum (i, j, k) {
        let sliceArr = [];
        let sortArr = [];
        
        for (let idx = i - 1; idx <= j - 1; idx++) {
            sliceArr.push(array[idx]);
        }
        sortArr = sliceArr.sort((a, b) => a - b);
        return sortArr[k - 1];
    }

    for (let i = 0; i < commands.length; i++) {
        result.push(findNum(commands[i][0], commands[i][1], commands[i][2]));
    }
    
    return result;
}