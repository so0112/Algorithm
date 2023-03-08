function solution(n, arr1, arr2) {
    
    let result = [];
    
    // 변환
    let solve1 = arr1.map(el => String(Number(el.toString(2))));
    let solve2 = arr2.map(el => String(Number(el.toString(2))));    

    // 0 추가 함수
    const plueZero = (item) => {
        let require = n - item.length;
        let str = "0".repeat(require);
        
        return str + item;
    }
    
    arr1 = solve1.map(el => plueZero(el));
    arr2 = solve2.map(el => plueZero(el));
    
    for (let i = 0; i < n; i++) {
        let treasure = "";
        
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] === "0" && arr2[i][j] === "0") treasure += " ";
            else treasure += "#";
        }
        result.push(treasure);
    }
    return result;
}