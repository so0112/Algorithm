function solution(polynomial) {
    let [xNum, num] = [0, 0];
    const arr = polynomial.split("+").map(el => el.trim());
    
    const xArr = arr.filter(el => el.indexOf("x") !== -1)
    .map(el => el.replace("x", ""));
    const numArr = arr.filter(el => el.indexOf("x") === -1)
    .map(el => Number(el));
    

    num = numArr.reduce((acc, cur) => acc + cur, 0)
   
    xArr.forEach((el, i) => {
      el === "" ? xNum += 1 : xNum += Number(el)
    })
    
  
    if (num === 0) return xNum === 1 ? "x" : `${xNum}x`;
    if (xNum === 0) return `${num}`;
    
    return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
}