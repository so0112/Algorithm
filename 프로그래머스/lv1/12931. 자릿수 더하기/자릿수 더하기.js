function solution(n)
{
    let string = String(n);
    let answer = 0;
    
    for (let i = 0; i < string.length; i++) {
        answer += Number(string[i]);
    }
    return answer;
}