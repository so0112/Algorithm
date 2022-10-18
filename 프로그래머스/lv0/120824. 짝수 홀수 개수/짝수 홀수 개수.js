function solution(num_list) {
    let even = num_list.filter(el => el % 2 === 0).length;
    
    return [even, num_list.length - even]
}