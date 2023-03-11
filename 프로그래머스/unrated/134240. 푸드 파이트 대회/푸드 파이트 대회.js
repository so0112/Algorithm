function solution(food) {
    
    // 홀수 제거
    for (let i = 1; i < food.length; i++) {
        if (food[i] % 2 !== 0) {
            food[i] -= 1;
        }
        food[i] /= 2;
    }
    
    
    // 푸드파이트 문자열
    let str = "";
    for (let i = 1; i < food.length; i++) {
        let order = String(i).repeat(food[i]);
        str += order;
    }
    
    
    return str + "0" + str.split("").reverse().join("");
}