function solution(s, skip, index) {
    let result = "";
    let apb = "abcdefghijklmnopqrstuvwxyz"
    
    // skip 제거
    for (let i = 0; i < skip.length; i++) {
        apb = apb.replace(skip[i], "");
    }
    
    // 인덱스 미루기
    let len = apb.length;
    
    for (let i = 0; i < s.length; i++) {
        let curIdx = apb.indexOf(s[i]);
        let changeIdx = (curIdx + index) % len;
        
        result += apb[changeIdx];
    }
    return result;
}