# Array Higher Order Methods

For all of the following problems, use an array higher order method to solve the problem. You should not use any for or while loops!

**Table of Contents**
- [Setup](#setup)
- [String Problems](#string-problems)
  - [Problem 1](#problem-1)
  - [Problem 2](#problem-2)
  - [Problem 3](#problem-3)
- [Number Problems](#number-problems)
  - [Problem 4](#problem-4)
  - [Problem 5](#problem-5)
- [Object Array Problems](#object-array-problems)
  - [Problem 6](#problem-6)
  - [Problem 7](#problem-7)
  - [Problem 8](#problem-8)
  - [Problem 9](#problem-9)
  - [Problem 10](#problem-10)

## Setup

Install dependencies

```sh
npm i
```

Run the program:

```sh
node src/from-scratch.js
```

After each problem, commit your progress and push to GitHub (main branch is fine!)

```sh
git add -A
git commit -m "finished problem X"
git push
```

## String Problems

### Problem 1

```js
const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];
printEveryWord(sampleWords);
/* Expected Output:
dog
blueberry
alabama
earth
football
*/
```

### Problem 2
```js
const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];
console.log(getStringLengths(sampleWords));
// Expected Output: [ 3, 9, 7, 5, 8 ]
```

### Problem 3
```js
const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];
sortWordsAlphabetically(sampleWords);
console.log(sampleWords);
// Expected Output: [ 'alabama', 'blueberry', 'dog', 'earth', 'football' ]
```

## Number Problems

### Problem 4

Write a function called `getEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.

Example:

```js
const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];
console.log(getEvenNumbers(sampleNumbers));
// Expected Output: [ 4, 8, 2, 10, 6 ]
```

### Problem 5

Write a function called `getLargestNumber` that takes an array of numbers as input and returns the largest number in the array.

Example:

```js
const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];
console.log(getLargestNumber(sampleNumbers));
// Expected Output: 10
```

## Object Array Problems

### Problem 6
```js
const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];
printUserNamesAndScores(sampleUsers);
/* Expected Output:
Charlie scored 80 points.
Edward scored 60 points.
Bob scored 90 points.
Diana scored 70 points.
Alice scored 100 points.
*/
```

### Problem 7
```js
const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];
console.log(getUserNames(sampleUsers));
// Expected Output: [ 'Charlie', 'Edward', 'Bob', 'Diana', 'Alice' ]
```

### Problem 8
```js
const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];
console.log(getActiveUsersUnder30(sampleUsers));
/* Expected Output:
[
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Bob', isActive: true, age: 25, score: 90 }
]
*/
```

### Problem 9
```js
const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];
console.log(getTotalScore(sampleUsers));
// Expected Output: 400
```

### Problem 10
```js
const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];
sortUsersByScoreDescending(sampleUsers);
console.log(sampleUsers);
/* Expected Output:
[
  { name: 'Alice', isActive: false, age: 28, score: 100 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Edward', isActive: true, age: 30, score: 60 }
]
*/
```