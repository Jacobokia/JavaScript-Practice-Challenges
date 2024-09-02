//define the function twoSum
//setset parameters for the function; nums $ target
//checking each of the numbers in the array
//as you check, pick two numbers at each interval and check if their sum is equal to the target
//if the sum of the two numbers equal to to the target we check their indices in the array
//then we return the indices as an array

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]
            if (sum === target) {
                return [i, j]
            }

        }
    }
}

twoSum([2, 7, 11, 15], 9)