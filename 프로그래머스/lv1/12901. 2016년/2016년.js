// 1월 1일은 FRI


// 월 - 일
// 1 - 31
// 2 - 28
// 3 - 31
// 4 - 30
// 5 - 31
// 6 - 30
// 7 - 31

// 8 - 31
// 9 - 30
// 10 - 31
// 11 - 30
// 12 - 31


function solution(a, b) {

    const   day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    const   mon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let     result = 0;
    
    for (let i = 0; i < a - 1; i++){
        result += mon[i];
    }
    
    result += b;
    
    return day[result % 7];
}