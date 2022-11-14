

function solution(n) {
    let result = [];
    
function isPrime(num) {
    
    if(num % 2 === 0) { 
        
    return num === 2 ? true : false;
  }
    
  const sqrt = parseInt(Math.sqrt(num));

  for(let divider = 3; divider <= sqrt; divider += 2) {

    if(num % divider === 0) {
      return false;
    }  
  }
    
  return true;
}
    for (let i = 4; i <= n; i++) {
        if (isPrime(i) === false) {
            result.push(i);
        }
    }
    return result.length;
}