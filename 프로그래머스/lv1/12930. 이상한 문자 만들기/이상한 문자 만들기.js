function solution(s) {
    let words = s.split(" ");
    let answer = "";

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i !== words.length - 1) {
            answer += " ";
        }
    }

    return answer;
}