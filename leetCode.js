let nums = [3, 2, 4];
let target = 6;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(`Indices: ${i}, ${j}`);
                console.log(`Values: ${nums[i]}, ${nums[j]}`);
                return [i, j];
            }
        }
    }
    console.log("No two elements sum up to the target.");
    return [];
};

twoSum(nums, target); // Call the function