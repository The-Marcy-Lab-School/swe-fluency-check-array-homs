# Array Higher Order Methods

For all of the following problems, use an array higher order method to solve the problem. You should not use any for or while loops!

**Table of Contents**
- [Setup](#setup)
- [Easy Problems](#easy-problems)
  - [Problem 1](#problem-1)
  - [Problem 2](#problem-2)
  - [Problem 3](#problem-3)
- [Medium Problems](#medium-problems)
  - [Problem 4](#problem-4)
  - [Problem 5](#problem-5)
  - [Problem 6](#problem-6)
- [Bonus Problem](#bonus-problem)

## Setup

Install dependencies

```sh
npm i
```

Run tests

```sh
npm t
```

After each problem, commit your progress and push to GitHub (main branch is fine!)

```sh
git add -A
git commit -m "finished problem X"
git push
```

## Easy Problems

### Problem 1 

Return an array of the lengths of each string in the given array.
Do not modify the original array.

Usage Examples:

```js
getStringLengths(['apple', 'banana', 'cherry']); // → [5, 6, 6]
getStringLengths(['abc', 'de', 'fghi']); // → [3, 2, 4]
getStringLengths(['']); // → [0]
```

### Problem 2

Return an array of only the even numbers from the given array of numbers.

Do not modify the original array.

Usage Examples:

```js
getEvenNumbers([1, 2, 3, 4, 5, 6]); // → [2, 4, 6]
getEvenNumbers([1, 3, 5]); // → []
```


### Problem 3

Return an array of the squares of only the even numbers from the given array of numbers.

Do not modify the original array.

Usage Examples:
```js
getEvenSquares([1, 2, 3, 4]); // → [4, 16]
getEvenSquares([1, 3, 5]); // → []
```

## Medium Problems

For the following problems, you will be given an array of `user` objects.
Each user object has the following properties: id, name, age, isActive, and score.
Do not modify the original array.

Example:

```js
const users = [
  { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
  { id: 2, name: 'Bob', age: 32, isActive: false, score: 92 },
  { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
  { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
  { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 }
];
```

### Problem 4

Return an array of users who are active and under 30. Do not modify the original array.

Usage Examples:

```js
getActiveUsersUnder30(users);
// returns [
//   { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
//   { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 }
// ]
```

### Problem 5

Return the sum of the scores of all users. Do not modify the original array.

Usage Examples:

```js
getTotalScore(users); // → 438 (85 + 92 + 78 + 95 + 88)
```

### Problem 6

Return the first user over with a score above 90. Do not modify the original array.

Usage Examples:

```js
getFirstHighScorer(users); // →   { id: 2, name: 'Bob', age: 32, isActive: false, score: 92 }
```

## Bonus Problem

Find the user with id `3`. If the user exists, remove that user from the user's array.
Otherwise, do nothing. Do not return anything. The original array SHOULD be mutated.

To test this function, remove the `skip` from the test in the spec file.

Usage Examples:

```js
findUserById3(users); // → undefined (modifies users array to remove Charlie)
findUserById3([]); // → undefined (does nothing)
```
