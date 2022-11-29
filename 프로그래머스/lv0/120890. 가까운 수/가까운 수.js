function solution(array, n) {
   
    let sortedArr = array.map((el) => [el, Math.abs(el - n)]).sort((a,b) => a[1] - b[1]);
    let sameAbsArr = sortedArr.filter((el) => el[1] === sortedArr[0][1]);
    
    if (sameAbsArr.length === 0) return sortedArr[0][0];
    
    let sortedSameAbsArr = sameAbsArr.sort((a, b) => a[0] - b[0]);
    
    return sortedSameAbsArr[0][0];
}