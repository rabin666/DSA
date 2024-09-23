---
sidebar_position: 2
---

# Advanced Array Topics in JavaScript

This guide covers advanced array techniques and algorithms commonly used in JavaScript programming and technical interviews.

## 1. Two-Pointer Technique

The two-pointer approach is essential for optimizing problems where you need to compare or traverse the array from both ends.

### Key Concepts:
- Use two pointers starting from different ends of the array.
- Move the pointers towards each other based on the problem conditions.

### Questions:
- Two Sum (Sorted Array): Given a sorted array, find two numbers that add up to a target.
- 3Sum: Find triplets in an array that sum to zero.
- Remove Duplicates from a Sorted Array: Modify the array in place to remove duplicates.
- Container With Most Water: Given an array of heights, find two lines that together with the x-axis forms a container that holds the most water.

### Example:
- LeetCode 1: Two Sum
- LeetCode 15: 3Sum

## 2. Sliding Window Technique

Sliding window problems involve efficiently finding a subarray or subset of elements based on a certain condition.

### Key Concepts:
- A "window" slides across the array to find a maximum, minimum, or target sum/product.
- Useful for problems involving contiguous subarrays.

### Questions:
- Longest Substring Without Repeating Characters.
- Maximum Sum Subarray of Size k.
- Smallest Subarray With Sum Greater Than S.
- Find All Anagrams in a String.

### Example:
- LeetCode 3: Longest Substring Without Repeating Characters
- LeetCode 567: Permutation in String

## 3. Prefix Sum / Cumulative Sum

Prefix sums allow efficient computation of subarray sums, and they are useful for range-based problems.

### Key Concepts:
- Precompute sums of subarrays and store them in an auxiliary array.
- Use it to answer range queries efficiently.

### Questions:
- Subarray Sum Equals K: Find the number of continuous subarrays whose sum equals a given value.
- Range Sum Query: Given an array, find the sum of elements between indices i and j.
- Product of Array Except Self: Find an array where each element is the product of all the elements except the current one.

### Example:
- LeetCode 560: Subarray Sum Equals K
- LeetCode 238: Product of Array Except Self

## 4. Kadane's Algorithm

Kadane's algorithm is used to solve maximum subarray sum problems with linear time complexity.

### Key Concepts:
- Maintain a running maximum sum of contiguous subarrays.
- Keep track of the maximum sum encountered so far.

### Questions:
- Maximum Sum Subarray: Find the largest sum of any contiguous subarray.
- Maximum Product Subarray: Find the largest product of any contiguous subarray.
- Find Maximum Circular Subarray Sum.

### Example:
- LeetCode 53: Maximum Subarray
- LeetCode 152: Maximum Product Subarray

## 5. Cyclic Sort

This algorithm is useful for problems involving numbers from a specific range (1 to n). The idea is to place each element at its correct index.

### Key Concepts:
- Rearrange the array such that every element is at its correct index.
- Useful when the array contains elements in the range 1 to n.

### Questions:
- Find the Missing Number: Given an array of numbers 1 to n, find the missing number.
- Find All Duplicates in an Array.
- Find All Missing Numbers.

### Example:
- LeetCode 448: Find All Numbers Disappeared in an Array
- LeetCode 268: Missing Number

## 6. Binary Search on Arrays

Binary search is a powerful technique that works on sorted arrays, allowing you to find elements or conditions in O(log n) time.

### Key Concepts:
- Search by repeatedly dividing the array in half.
- Works only on sorted arrays or can be applied with some modifications to rotated sorted arrays.

### Questions:
- Binary Search in a Sorted Array.
- Search in Rotated Sorted Array.
- Find Peak Element in an Array.
- Find First and Last Position of Element in Sorted Array.

### Example:
- LeetCode 33: Search in Rotated Sorted Array
- LeetCode 162: Find Peak Element

## 7. Merge Intervals

Problems related to intervals often require sorting the intervals by start time and then merging or manipulating overlapping intervals.

### Key Concepts:
- Sort intervals based on their starting points.
- Traverse the intervals and merge overlapping ones.

### Questions:
- Merge Overlapping Intervals.
- Insert Interval into a Set of Intervals.
- Meeting Rooms: Find if a person can attend all meetings based on meeting intervals.

### Example:
- LeetCode 56: Merge Intervals
- LeetCode 57: Insert Interval

## 8. Greedy Algorithms on Arrays

Greedy algorithms make locally optimal choices at each step in the hope that they will lead to a global optimum.

### Key Concepts:
- Often useful for problems involving optimization and minimization.
- Solve the problem step by step by making the best choice at each step.

### Questions:
- Jump Game: Can you reach the last index in the array?
- Candy Distribution: Distribute candies to children such that children with higher ratings get more candies.
- Gas Station: Find out if you can complete a circuit of gas stations.

### Example:
- LeetCode 45: Jump Game II
- LeetCode 134: Gas Station

## 9. Matrix Manipulation (2D Arrays)

Matrix (or 2D array) problems involve traversing and manipulating grids.

### Key Concepts:
- Traversing a 2D matrix using loops.
- Performing matrix rotations or searches.
- Applying algorithms like Depth-First Search (DFS) or Breadth-First Search (BFS) in a grid.

### Questions:
- Rotate Matrix by 90 Degrees.
- Spiral Matrix Traversal.
- Search a 2D Matrix.
- Word Search in a Grid.

### Example:
- LeetCode 48: Rotate Image
- LeetCode 79: Word Search

## 10. Monotonic Stack

The monotonic stack is useful for problems where you need to maintain a stack with a specific order (either increasing or decreasing).

### Key Concepts:
- A stack that helps solve problems related to the next greater element or previous smaller element.
- Can be used to find nearest larger or smaller values.

### Questions:
- Largest Rectangle in Histogram.
- Trapping Rain Water.
- Daily Temperatures: Find out how many days until a warmer temperature.
- Next Greater Element.

### Example:
- LeetCode 84: Largest Rectangle in Histogram
- LeetCode 42: Trapping Rain Water

## 11. Dynamic Programming on Arrays

Dynamic Programming (DP) is used to solve problems by breaking them down into overlapping subproblems.

### Key Concepts:
- Use a table or array to store solutions to subproblems and build up to the solution of the entire problem.
- Often involves decision-making at each element (e.g., whether to include or exclude an element in a sum or product).

### Questions:
- House Robber Problem: Maximize the amount of money you can rob from houses without robbing adjacent ones.
- Climbing Stairs: Find the number of ways to reach the top of a staircase.
- Longest Increasing Subsequence.
- Coin Change: Find the minimum number of coins that make up a given amount.

### Example:
- LeetCode 198: House Robber
- LeetCode 300: Longest Increasing Subsequence

## Common Advanced Array Interview Questions

To fully master arrays, consider practicing the following challenging questions from various platforms:

1. Find the Minimum in a Rotated Sorted Array.
2. Jump Game II (Greedy / Dynamic Programming).
3. Kth Largest Element in an Array (Using Quickselect or Heap).
4. Maximal Rectangle (Matrix problem using stacks).
5. Subarray Product Less Than K (Sliding Window).
6. Median of Two Sorted Arrays (Binary Search).
7. Game of Life (Matrix manipulation problem).

By solving these types of questions and mastering advanced array concepts, you'll be well-prepared for technical interviews at top-tier companies.
