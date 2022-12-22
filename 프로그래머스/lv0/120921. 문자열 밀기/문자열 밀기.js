function solution(A, B) {
    let cnt = 0;
    
    if (A === B) return 0;
    
    for (let i = 0; i < A.length; i++) {
        A = A[A.length - 1] + A.slice(0, -1);
        cnt += 1;
        
        if (A === B) return cnt;
    }
    
    return -1;
}