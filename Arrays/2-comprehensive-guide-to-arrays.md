# Arrays in JavaScript

In JavaScript, arrays are a fundamental data structure used to store multiple values in a single variable. They are flexible, dynamic, and provide a variety of built-in methods for manipulation. JavaScript arrays can store values of different data types, including numbers, strings, objects, and even other arrays (multidimensional arrays).

Here's a guide to arrays in JavaScript, including common operations and methods you'll need to master.

---

## Creating an Array

You can create arrays in JavaScript in a few different ways:

### 1. Using Array Literal Syntax

```javascript
const arr = [1, 2, 3, 4, 5];
```

### 2. Using the Array Constructor

```javascript
const arr = new Array(1, 2, 3, 4, 5);
```

### 3. Empty Array

```javascript
const arr = [];
```

### 4. Array with Specific Size

```javascript
const arr = new Array(5);  // Creates an array with 5 empty slots
```

## Accessing and Modifying Elements

### 1. Accessing Elements

Array elements are indexed, starting at 0:

```javascript
const arr = [10, 20, 30];
console.log(arr[0]);  // Output: 10
console.log(arr[2]);  // Output: 30
```

### 2. Modifying Elements

You can modify array elements by assigning a value to a specific index:

```javascript
arr[1] = 50;
console.log(arr);  // Output: [10, 50, 30]
```

### 3. Adding Elements

Push: Adds an element to the end.

```javascript
arr.push(40);
console.log(arr);  // Output: [10, 50, 30, 40]
```

Unshift: Adds an element to the beginning.

```javascript
arr.unshift(5);
console.log(arr);  // Output: [5, 10, 50, 30, 40]
```

### 4. Removing Elements

Pop: Removes the last element.

```javascript
arr.pop();
console.log(arr);  // Output: [5, 10, 50, 30]
```

Shift: Removes the first element.

```javascript
arr.shift();
console.log(arr);  // Output: [10, 50, 30]
```

## Array Properties

### 1. Length

The `.length` property returns the number of elements in the array.

```javascript
const arr = [1, 2, 3, 4];
console.log(arr.length);  // Output: 4
```

### 2. Indexing

You can access and modify array elements using their index (starting from 0).

```javascript
console.log(arr[2]);  // Output: 3
```

### 3. Slicing and Splicing

Slice: Returns a new array from a portion of an existing array.

```javascript
const slicedArr = arr.slice(1, 3);
console.log(slicedArr);  // Output: [2, 3]
```

Splice: Modifies an array by adding or removing elements.

```javascript
const removed = arr.splice(1, 2);  // Removes 2 elements starting from index 1
console.log(removed);  // Output: [2, 3]
console.log(arr);  // Output: [1, 4]
```

## Array Methods

### 1. forEach()

Executes a provided function once for each array element.

```javascript
const arr = [1, 2, 3, 4];
arr.forEach(num => console.log(num * 2));  // Output: 2 4 6 8
```

### 2. map()

Creates a new array populated with the results of calling a function on every element.

```javascript
const doubled = arr.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]
```

### 3. filter()

Creates a new array with all elements that pass a test.

```javascript
const even = arr.filter(num => num % 2 === 0);
console.log(even);  // Output: [2, 4]
```

### 4. reduce()

Executes a reducer function on each element of the array, resulting in a single output value.

```javascript
const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);  // Output: 10
```

### 5. find()

Returns the value of the first element that satisfies the provided testing function.

```javascript
const found = arr.find(num => num > 2);
console.log(found);  // Output: 3
```

### 6. findIndex()

Returns the index of the first element that satisfies the test.

```javascript
const index = arr.findIndex(num => num > 2);
console.log(index);  // Output: 2
```

### 7. some()

Tests whether at least one element in the array passes the test.

```javascript
const hasEven = arr.some(num => num % 2 === 0);
console.log(hasEven);  // Output: true
```

### 8. every()

Tests whether all elements in the array pass the test.

```javascript
const allPositive = arr.every(num => num > 0);
console.log(allPositive);  // Output: true
```

### 9. sort()

Sorts the elements of an array in place.

```javascript
const arr = [30, 1, 21, 4];
arr.sort((a, b) => a - b);  // Ascending order
console.log(arr);  // Output: [1, 4, 21, 30]
```

### 10. reverse()

Reverses the array in place.

```javascript
arr.reverse();
console.log(arr);  // Output: [30, 21, 4, 1]
```

### 11. concat()

Merges two or more arrays into a new array.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined);  // Output: [1, 2, 3, 4]
```

### 12. join()

Joins all elements of an array into a string.

```javascript
const arr = ['Hello', 'World'];
const joined = arr.join(' ');
console.log(joined);  // Output: "Hello World"
```

### 13. includes()

Determines if an array includes a certain value.

```javascript
const arr = [1, 2, 3, 4];
console.log(arr.includes(3));  // Output: true
```

## Advanced Array Topics

### 1. Multidimensional Arrays

JavaScript does not have built-in support for multidimensional arrays, but you can simulate them using nested arrays:

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]);  // Output: 6
```

### 2. Destructuring Arrays

You can extract values from arrays using destructuring.

```javascript
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first, second);  // Output: 1 2
```

### 3. Rest and Spread Operator

Spread Operator (...): Expands elements of an array.

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);  // Output: [1, 2, 3, 4]
```

Rest Operator (...): Collects remaining elements into an array.

```javascript
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest);  // Output: [2, 3, 4]
```

## Common Array Interview Questions

To master arrays in JavaScript, you should practice common algorithmic problems. Here are some examples:

1. Find the Maximum/Minimum Element in an Array
2. Reverse an Array
3. Find Duplicate Elements in an Array
4. Find Pairs That Sum to a Target
5. Rotate an Array (Cyclic Rotation)
6. Merge Two Sorted Arrays
7. Find Missing Numbers in an Array
8. Move Zeros to the End
9. Kadane's Algorithm (Maximum Sum Subarray)
10. Find the Longest Increasing Subsequence
