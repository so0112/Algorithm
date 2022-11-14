function solution(my_string) {
    let set = [...new Set(my_string)];
    
    return set.join("")
}