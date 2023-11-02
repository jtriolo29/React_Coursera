function twoSum(nums, target) { 
    for(let i = 0; i < nums.length; i++) {
        // The inner loop starts from the next number
        for(let j = i + 1; j < nums.length; j++) {
            // We calculate the sum in each iteration, which is not DRY
            let sum = nums[i] + nums[j];

            // We check if the sum equals the target
            if(sum === target) {
                // If it does, we create an array and return it
                let result = [i, j];
                return result;
            }
        }
    }

    // If no solution found, return null
    return null;
}

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target)); // [0, 1]