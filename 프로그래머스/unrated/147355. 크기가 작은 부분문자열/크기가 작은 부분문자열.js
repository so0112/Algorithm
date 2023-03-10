function solution(t, p) {
    
    let result = [];    
    // len와 길이가 같은 부분 문자열 만들기
    let list = [];
    let len = p.length;

    for (let i = 0; i <= t.length - len; i++) {
        let num = t.slice(i, i + len);
        list.push(num);
    }
    
    return list.filter((el) => el <= p).length;
}