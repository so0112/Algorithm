function solution(numlist, n) {

    const obj = {};
    
    for (let i = 0; i < numlist.length; i++) {
        obj[numlist[i]] = Math.abs(numlist[i] - n);
    }
    
    let arr = [];
    for (let number in obj) {
        arr.push([number, obj[number]]);
    }
    
    arr.sort((a, b) => {
        if (a[1] === b[1]) return b[0] - a[0];
        return a[1] - b[1];
    });
    
    return arr.map(el => Number(el[0]));
}