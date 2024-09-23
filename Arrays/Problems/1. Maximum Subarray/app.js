// Leetcode: 53. Maximum Subarray
// Brute Force Solution
// Time Complexity: O(n^2) : Time complexity is O(n^2) because for each element in the array, we are iterating through the rest of the array to find the maximum sum subarray.
// Space Complexity: O(1) : We are not using any extra space, so the space complexity is O(1).
// Limitations:
// This solution is inefficient for large arrays due to the O(n²) time complexity. For large input sizes (n > 10^4), this brute force solution may take too long to run, and an optimized solution (such as Kadane’s Algorithm) is recommended for real-world use.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		for (let j = i; j < nums.length; j++) {
			sum += nums[j];
			maxSum = Math.max(maxSum, sum);
		}
	}
	return maxSum;
};


maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // 6
maxSubArray([1]); // 1
maxSubArray([5,4,-1,7,8]); // 23
maxSubArray([-1]); // -1
maxSubArray([-2,1]); // 1
maxSubArray([-2,-1]); // -1
maxSubArray([-1,-2]); // -1
maxSubArray([1,2]); // 3
maxSubArray([2,1]); // 3


// Using C++ to solve the problem
// class Solution {
// 	public:
// 		int maxSubArray(vector<int>& nums) {
// 			int maxSum = INT_MIN;

// 			for (int i = 0; i < nums.size(); i++) {
// 				int sum = 0;
// 				for (int j = i; j < nums.size(); j++) {
// 					sum += nums[j];
// 					maxSum = max(maxSum, sum);
// 				}
// 			}
// 			return maxSum;
// 		}
// };

// int main() {
// 	Solution s;
// 	vector<int> nums = {-2,1,-3,4,-1,2,1,-5,4};
// 	cout << s.maxSubArray(nums) << endl; // 6
// 	return 0;
// }	


