function solution(cards1, cards2, goal){
    
    for (let el of goal) {
        if (cards1[0] === el) {
            cards1.shift();
        } else if (cards2[0] === el) {
            cards2.shift();
        } else {
            return "No";
        }
    }
    
    return "Yes";
}