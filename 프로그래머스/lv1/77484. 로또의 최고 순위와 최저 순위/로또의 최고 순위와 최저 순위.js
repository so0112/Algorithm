function solution(lottos, win_nums) {
    
    let max = 0;
    let min = 0;
    let zero = 0;
    
    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < lottos.length; j++) {
            if (lottos[i] === win_nums[j]) min++;
        }
    }
    zero = lottos.filter(el => el === 0).length;
    
    max = min + zero;
    
    max = max <= 1 ? 6 : 7 - max;
    min = min <= 1 ? 6 : 7 - min;
    
    return [max, min];
    
    
}