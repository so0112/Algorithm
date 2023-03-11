function solution(nums) {
    let num = nums.length / 2;
    let set = new Set(nums);
    let setLen = [...set].length;
    
    return num < setLen ? num : setLen;
}