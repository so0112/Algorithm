function solution(lines) {
    var answer = 0;
    const array = Array(200).fill(0);
    lines.forEach(([a, b]) => {
        if (a > b) {
            [a, b] = [b, a];
        }
        for (let i = a; i < b; i++) {
            array[i + 100] += 1;
        }
    });
    return array.filter(e => e > 1).length;
}