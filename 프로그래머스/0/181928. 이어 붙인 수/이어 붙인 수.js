function solution(num_list) {
    var answer = 0;
    
    let odd = "";
    let even = "";
    
    for (let i = 0; i < num_list.length; i++){
        if (num_list[i] % 2 === 0) {
            even += num_list[i];
        } else {
            odd += num_list[i];
        }
    }
    
    answer = Number(odd) + Number(even);
    
    return answer;
    
    
}