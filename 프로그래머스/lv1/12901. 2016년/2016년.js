function solution(a, b) {
    
    // 월 일수 배열 (인덱스 맞추기용 0번 인덱스)
    let numbers = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    
    // (a - 1월까지 일 수 + b) % 7 => 요일
    let cnt = b;
    
    for (let i = 1; i < a; i++) {
        cnt += numbers[i];
    }
    
    return days[cnt % 7];
}