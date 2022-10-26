// arr1, arr2 암호를 2진법으로 변환해서 배열로 만들기
// map1, map2 인덱스의 각 요소를 비교
// || 조건으로 finalMap 채우기
function solution(n, arr1, arr2) {
    
    let map1 = [];
    let map2 = [];
    let finalMap = [];
    let result = '';
    
    for (let i = 0; i < n; i++){
        map1.push(arr1[i].toString(2));
        map2.push(arr2[i].toString(2));
    } 
    
    for (let i = 0; i < n; i++){
        while(map1[i].length < n){
            map1[i] = 0 + map1[i]
        }
        
        while(map2[i].length < n){
            map2[i] = 0 + map2[i]
        }
    }
    
    for (let i = 0; i < n; i++){
        result = ''
     for (let j = 0; j < n; j++){
         if(map1[i][j] === '1' || map2[i][j] === '1'){
             result += '#'
         }else {
             result += ' '
         }
     }
        finalMap.push(result);
    }
   
    return finalMap;
}