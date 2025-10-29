const path = require('path');
const ScoreCounter = require('score-tests');
const {
  getStringLengths,
  getEvenNumbers,
  getEvenSquares,
  getActiveUsersUnder30,
  getTotalScore,
  getFirstHighScorer,
  findUserById3,
} = require('../from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('getStringLengths - returns an array of the lengths of each string in the given array', () => {
    expect(getStringLengths(['apple', 'banana', 'cherry'])).toEqual([5, 6, 6]);
    expect(getStringLengths(['abc', 'de', 'fghi'])).toEqual([3, 2, 4]);
    expect(getStringLengths([])).toEqual([]);
    expect(getStringLengths(['hello', 'world'])).toEqual([5, 5]);
    expect(getStringLengths([''])).toEqual([0]);

    // The function should not modify the original array
    const strings = ['apple', 'banana', 'cherry'];
    getStringLengths(strings);
    expect(strings).toEqual(['apple', 'banana', 'cherry']);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getEvenNumbers - returns an array of only the even numbers from the given array of numbers', () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(getEvenNumbers([1, 3, 5])).toEqual([]);
    expect(getEvenNumbers([])).toEqual([]);

    // The function should not modify the original array
    const numbers = [1, 2, 3, 4, 5, 6];
    getEvenNumbers(numbers);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getEvenSquares - returns an array of the squares of only the even numbers from the given array of numbers', () => {
    expect(getEvenSquares([1, 2, 3, 4])).toEqual([4, 16]);
    expect(getEvenSquares([1, 3, 5])).toEqual([]);
    expect(getEvenSquares([])).toEqual([]);

    // The function should not modify the original array
    const numbers = [1, 2, 3, 4];
    getEvenSquares(numbers);
    expect(numbers).toEqual([1, 2, 3, 4]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getActiveUsersUnder30 - returns an array of users who are active and under 30', () => {
    const users = [
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ];

    expect(getActiveUsersUnder30(users)).toEqual([{ id: 1, name: 'Alice', age: 25, isActive: true, score: 85 }, { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 }]);
    expect(getActiveUsersUnder30([])).toEqual([]);

    // The function should not modify the original array
    expect(users).toEqual([
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ]);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getTotalScore - returns the sum of the scores of all users', () => {
    const users = [
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ];

    expect(getTotalScore(users)).toEqual(85 + 92 + 78 + 95 + 88);
    expect(getTotalScore([])).toEqual(0);

    // The function should not modify the original array
    expect(users).toEqual([
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ]);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getFirstHighScorer - returns the first user over with a score above 90', () => {
    const users = [
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ];
    expect(getFirstHighScorer(users)).toEqual({ id: 2, name: 'Bob', age: 20, isActive: false, score: 92 });
    expect(getFirstHighScorer([])).toEqual(undefined);

    // The function should not modify the original array
    expect(users).toEqual([
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it.skip('findUserById3 - finds the user with id 3 and removes them from the users array', () => {
    const users = [
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 3, name: 'Charlie', age: 28, isActive: true, score: 78 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ];
    findUserById3(users);
    expect(users).toEqual([
      { id: 1, name: 'Alice', age: 25, isActive: true, score: 85 },
      { id: 2, name: 'Bob', age: 20, isActive: false, score: 92 },
      { id: 4, name: 'Diana', age: 35, isActive: true, score: 95 },
      { id: 5, name: 'Edward', age: 19, isActive: false, score: 88 },
    ]);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
