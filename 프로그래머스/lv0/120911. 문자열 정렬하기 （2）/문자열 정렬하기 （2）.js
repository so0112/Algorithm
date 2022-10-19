function solution(my_string) {
    let lower = my_string.toLowerCase().split('');
    
    return lower.sort().join('');
}