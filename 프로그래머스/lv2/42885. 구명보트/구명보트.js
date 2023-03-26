function solution(people, limit){
	let answer = 0
    people.sort((a,b) => b-a)
    let left = 0
    let right = people.length-1
    
    while(left < right){
    	let sum = people[left] + people[right];
        if(sum > limit){
        	left++;
        } else {
        	left++
            right--;
        }
        answer++
    }
    if(left === right) answer++;
    return answer
}