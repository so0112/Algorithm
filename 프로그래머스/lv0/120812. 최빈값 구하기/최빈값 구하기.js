function solution(array) {
    if (array.length === 1) return array[0];
    
    let obj = {}
    
    for (let i = 0; i < array.length; i++){
        array[i] in obj ? obj[array[i]] += 1 : obj[array[i]] = 1;
    }
    
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let mode = Math.max(...values)
    
    return values.filter((el) => el === mode).length > 1 ? -1 : Number(keys[values.indexOf(mode)]);
}

