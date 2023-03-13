function solution(n, lost, reserve) {
    
    // 도난 이전 
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(1);
        arr[i] -= 1;
    }
    
    // 도난 이후
    for (let i = 0; i < lost.length; i++) {
        arr[lost[i] - 1] -= 1;
    }
    
    // 여벌 보유
    for (let i = 0; i < reserve.length; i++) {
        arr[reserve[i] - 1] += 1;
    }
    
    // 대여
    for (let i = 0; i < n; i++) {
        if (arr[i] === 1 && arr[i + 1] === -1) {
            arr[i] = 0;
            arr[i + 1] = 0;
        }
        
        if (arr[i] === -1 && arr[i + 1] === 1) {
            arr[i] = 0;
            arr[i + 1] = 0;
        }
    }

    
    return n - arr.filter(el => el === -1).length;
}