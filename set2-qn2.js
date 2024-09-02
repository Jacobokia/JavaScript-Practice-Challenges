/* Given an integer array nums, return true if any value appears at least twice in the array, //and return false if every element is distinct. */

function checkDuplicate(nums) {
    let duplicate = new Set();
    for (const num of nums) {
        if (duplicate.has(num)) {
            return true;
        }
        duplicate.add(num);
        
    }
    return false;
}

let nums = [1,2,2,3,4,4]

containsDuplicate(nums)

