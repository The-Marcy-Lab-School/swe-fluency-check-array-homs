# Array Higher Order Methods

For all of the following problems, use an array higher order method to solve the problem. You should not use any for or while loops!

**Table of Contents**
- [Setup](#setup)
- [Testing](#testing)
- [String Array Problems](#string-array-problems)
  - [Problem 1](#problem-1)
  - [Problem 2](#problem-2)
  - [Problem 3](#problem-3)
- [Number Array Problems](#number-array-problems)
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
node from-scratch.js
```

After each problem, commit your progress and push to GitHub (main branch is fine!)

```sh
git add -A
git commit -m "finished problem X"
git push
```

## Testing

There are no provided tests for you, however we provide examples of how to use each function as well as what the expected output should be. Use these to manually test your functions.

## String Array Problems

### Problem 1

Write a function called `printEveryWord` that takes an array of words as input and prints each word to the console.

Example Usage:

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

Write a function called `getStringLengths` that takes an array of words as input and returns a new array containing the lengths of each word.

Example Usage:

```js
const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

console.log(getStringLengths(sampleWords));
// Expected Output: [ 3, 9, 7, 5, 8 ]
```

### Problem 3
Write a function called `sortWordsZtoA` that takes an array of words as input and sorts the array in reverse alphabetical order. This function should sort the array "in place" meaning it SHOULD mutate the array.

Example Usage:

```js
const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

sortWordsZtoA(sampleWords);
console.log(sampleWords);
// Expected Output: [ 'football', 'earth', 'alabama', 'blueberry', 'dog' ]
```

## Number Array Problems

### Problem 4

Write a function called `getEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.

Example Usage:

```js
const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];
console.log(getEvenNumbers(sampleNumbers));
// Expected Output: [ 4, 8, 2, 10, 6 ]
```

### Problem 5

Write a function called `getLargestNumber` that takes an array of numbers as input and returns the largest number in the array.

Example Usage:

```js
const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];
console.log(getLargestNumber(sampleNumbers));
// Expected Output: 10
```

## Object Array Problems

### Problem 6

Write a function called `printUserNamesAndScores` that takes an array of user objects as input and prints the name and score of each user to the console in the format `[name] scored [points] points.`.

Example Usage:

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

Write a function called `getUserNames` that takes an array of user objects as input and returns a new array of just the names of each user.

Example Usage:

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

Write a function called `getActiveUsersUnder30` that takes an array of user objects as input and returns a new array containing only the users whose `age` is under 30 AND whose `isActive` property is `true`.

Example Usage:

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

Write a function called `getTotalScore` that takes an array of user objects as input and returns the sum of all of the user's `score`.

Example Usage:

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

Write a function called `sortUsersByScoreDescending` that takes an array of user objects as input and sorts the users in descending order by their score (the highest score should be first). This function should sort the array "in place" meaning it SHOULD mutate the array.

Example Usage:

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
