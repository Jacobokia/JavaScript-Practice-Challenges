/*
Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array
*/
function majorityElement(nums) {
    let targetNum = null;
    let count = 0;

    
    for (const num of nums) {
        if (count === 0) {
            targetNum = num;
        }
        count += (num === targetNum) ? 1 : -1;
    }

    return targetNum;
}

let arr = [3,2,3]

majorityElement(arr)