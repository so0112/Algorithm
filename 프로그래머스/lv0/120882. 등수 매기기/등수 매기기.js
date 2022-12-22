function solution(score) {
    const avg = score.map((el) => (el[0] + el[1]) / 2);
    const sort = avg.slice().sort((a,b) => b - a);

    return avg.map(el => sort.indexOf(el) + 1);
}