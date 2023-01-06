function solution(lines) {
    const common = {};
    let len = 0;
    
    for (let i = 0; i <= 2; i++) {
        for (let j = lines[i][0]; j <= lines[i][1]; j++) {
            if(common[j] === undefined) {
                common[j] = 1;
            } else {
                common[j] += 1;
            }
        }
    }
    
    
    let sortobj = [];
    for (let number in common) {
        sortobj.push([number, common[number]]);
    }
    
    sortobj.sort(function(a, b) {
        return a[0] - b[0];
    });
    
    for (let i = 0; i < sortobj.length - 1; i++) {
        if (sortobj[i][1] > 1 && sortobj[i + 1][1] > 1) len += 1;
    }
    
    const visited = lines.reduce((a, [x, y]) => {
        for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++) a[i] = a[i] ? a[i] + 1 : 1;
        return a;
    }, {});

    console.log(visited)
    
    return Object.values(visited).filter(v => v > 1).length;
}