// 번호 뒷 4자리를 제외한 모든 번호 '*' 값으로 변경 
// len 8 일경우 7 6 5 4
// 문자.length - 5 까지는 싹 다 * 값으로 변경해라
function solution(phone_number) {
    var answer = '';
    let len = phone_number.length
    for (let i = 0; i < len - 4; i++){
        answer += '*'
    }
    for (let j = len - 4; j < len; j++){
        answer += phone_number[j];
    }

    return answer;
}