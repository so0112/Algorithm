function solution(common) {
    const [a, b, c] = [common[0], common[1], common[2]];
    const [differ, ratio] = [b - a, b / a];
    const end = common[common.length - 1];
    
    if (b - a === c - b) return (end + differ);
    
    return end * ratio;
}