function solution(nums) {
    let num = nums.length / 2;
    let set = new Set(nums).size;
    
    return num < set ? num : set;
}