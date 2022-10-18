function solution(babbling) {    
    let can = babbling.map(el => el.replace(/ayaaya|yeye|woowoo|mama/g, "r")
                            .replace(/aya|ye|woo|ma/g, "")
                           );
    return can.filter(el => el === "").length;
}