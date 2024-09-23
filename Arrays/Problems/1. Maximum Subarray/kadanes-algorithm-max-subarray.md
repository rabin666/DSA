---
title: "Kadane's Algorithm: Efficient Solution for Maximum Subarray Problem"
description: "A detailed explanation of Kadane's algorithm for solving the Maximum Subarray Problem in linear time"
date: "2024-09-23"
tags: ["algorithms", "dynamic-programming", "kadane's-algorithm", "javascript"]
---

# Kadane's Algorithm: Solving the Maximum Subarray Problem

Kadane's algorithm is an efficient, linear-time algorithm for solving the Maximum Subarray Problem. It uses dynamic programming to find the contiguous subarray within a one-dimensional array of numbers which has the largest sum.

## Problem Statement

Given an integer array `nums`, find the subarray with the largest sum and return its sum.

## Understanding Kadane's Algorithm

Kadane's algorithm is based on a simple idea: at each position, we decide whether to start a new subarray or extend the existing subarray, depending on which yields a larger sum.

### Key Idea

The core concept is to maintain two variables:

1. `currentSum`: The maximum sum of a subarray ending at the current position.
2. `maxSum`: The maximum sum found so far.

As we iterate through the array, we update these variables based on the current element.

### Algorithm Steps

1. Initialize `currentSum` and `maxSum` to the first element of the array.
2. Iterate through the array starting from the second element:
   a. Update `currentSum` by taking the maximum of the current element and the sum of `currentSum` and the current element.
   b. Update `maxSum` if `currentSum` is greater than `maxSum`.
3. Return `maxSum`.

## Implementation

Here's a JavaScript implementation of Kadane's algorithm:

```javascript
function maxSubArray(nums) {
    if (nums.length === 0) return 0;
    
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
```

## Step-by-Step Explanation

Let's break down how the algorithm works:

1. We start by initializing both `maxSum` and `currentSum` to the first element of the array. This handles the case where the array might contain only one element.

2. We then iterate through the array starting from the second element:

   a. For each element, we have two choices:
      - Start a new subarray beginning with this element (`nums[i]`)
      - Extend the current subarray by including this element (`currentSum + nums[i]`)
   
   We take the maximum of these two options and assign it to `currentSum`.

   b. We then update `maxSum` if `currentSum` is greater than the current `maxSum`.

3. After iterating through all elements, `maxSum` will contain the sum of the maximum subarray.

## Complexity Analysis

- **Time Complexity**: O(n), where n is the length of the input array. We only need to iterate through the array once.
- **Space Complexity**: O(1), as we only use a constant amount of extra space regardless of the input size.

## Example

Let's walk through an example to illustrate how the algorithm works:

Input: `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`

| Index | Number | currentSum | maxSum | Explanation |
|-------|--------|------------|--------|-------------|
| 0     | -2     | -2         | -2     | Initialize both sums with the first element |
| 1     | 1      | 1          | 1      | 1 > -2 + 1, so start a new subarray |
| 2     | -3     | -2         | 1      | 1 + (-3) = -2, keep the current subarray |
| 3     | 4      | 4          | 4      | 4 > -2 + 4, so start a new subarray |
| 4     | -1     | 3          | 4      | 4 + (-1) = 3, extend the current subarray |
| 5     | 2      | 5          | 5      | 3 + 2 = 5, extend the current subarray |
| 6     | 1      | 6          | 6      | 5 + 1 = 6, extend the current subarray |
| 7     | -5     | 1          | 6      | 6 + (-5) = 1, extend the current subarray |
| 8     | 4      | 5          | 6      | 1 + 4 = 5, extend the current subarray |

The algorithm returns 6, which is the sum of the subarray [4, -1, 2, 1].

## Advantages of Kadane's Algorithm

1. **Efficiency**: It solves the problem in O(n) time complexity, which is optimal for this problem.
2. **Simplicity**: The algorithm is straightforward to understand and implement.
3. **Space Efficiency**: It uses only O(1) extra space, making it memory-efficient.
4. **Online Algorithm**: It can process the input array in a single pass, making it suitable for streaming data.

## Variations and Extensions

1. **Finding the Actual Subarray**: The basic algorithm can be easily modified to return the start and end indices of the maximum subarray.
2. **Handling All Negative Numbers**: If the array contains all negative numbers, the algorithm will return the largest (least negative) number.
3. **Circular Array**: A variation of this problem involves finding the maximum sum subarray in a circular array.

## Conclusion

Kadane's algorithm is a classic example of how dynamic programming can be used to solve complex problems efficiently. Its simplicity and effectiveness make it a favorite in coding interviews and a fundamental technique in algorithm design.

By understanding and mastering Kadane's algorithm, you'll not only be able to solve the Maximum Subarray Problem efficiently but also gain insights into dynamic programming techniques that can be applied to a wide range of algorithmic challenges.
