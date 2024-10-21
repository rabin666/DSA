/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]]) {
			return nums[i];
		}
		map[nums[i]] = 1;
	}
};


console.log(findDuplicate([1,3,4,2,2])); // 2