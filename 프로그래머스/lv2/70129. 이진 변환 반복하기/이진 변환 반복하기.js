// return [이진변환 횟수, 제거한 0의 개수]

function solution(s) {
    let [count, deleteZero]  = [0, 0];
    let check;
    let len;
    
    while (s !== "1"){
    deleteZero += s.replaceAll("1", "").length;
    len = s.replaceAll("0", "").length;
    s = len.toString(2);
    count++;    
    }
    
    return [count, deleteZero];
    
}