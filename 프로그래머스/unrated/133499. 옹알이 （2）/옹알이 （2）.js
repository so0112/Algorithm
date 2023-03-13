function solution(babbling) {
    let result = 0;
    let can = ["aya", "ye", "woo", "ma"];
    let cant = ["ayaaya", "yeye", "woowoo", "mama"];
    
    // cant 거르기
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < cant.length; j++) {
            babbling[i] = babbling[i].replaceAll(cant[j], "2");
        }
    }
    
    // can 찾기
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < can.length; j++) {
            babbling[i] = babbling[i].replaceAll(can[j], "1");
        }
    }
    
    for (let i = 0; i < babbling.length; i++) {
        babbling[i] = babbling[i].replaceAll("1" , "");
    }
    
    
    return babbling.filter(el => el === "").length;
}