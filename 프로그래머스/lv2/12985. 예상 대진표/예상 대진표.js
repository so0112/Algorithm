// 홀수 + 1 / 2 or 짝수 / 2 => 대전 번호
// N / 2 => 총 대전 수, 회차가 진행될 수록 계속 반으로 나눠짐

function solution (n,a,b) {  
    
    function battle (num) {
        
    return num % 2 === 0 ? num / 2 : (num + 1) / 2;
    }
    
    let cnt = 1;
    let groupA = battle(a);
    let groupB = battle(b);
    
    while (groupA !== groupB) {
        groupA = battle(groupA);
        groupB = battle(groupB);
        cnt++;
    }
    return cnt;
}