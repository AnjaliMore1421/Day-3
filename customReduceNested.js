// customReduce.js
// Task: Create a custom reduce function and use it for nested data

// ------------------------------
// 1. Custom reduce function
// ------------------------------
Array.prototype.myReduce = function (cb, initial) {
  let acc = initial;        // start accumulator with initial value
  let startIndex = 0;

  // If no initial value, use first element
  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  // Loop through array and update accumulator
  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc; // return the final result
};

// ------------------------------
// 2. Example: Total score from nested structure
// ------------------------------
const data = [
  { name: "A", scores: [10, 20] },
  { name: "B", scores: [30, 40] }
];

// Reduce each student's scores and sum them all
const totalScore = data.myReduce((acc, student) => {
  const sum = student.scores.myReduce((a, b) => a + b, 0); // sum student's scores
  return acc + sum; // add to total
}, 0);

console.log("Total Score:", totalScore); // 100

// ------------------------------
// 3. Example: Flatten a nested array
// ------------------------------
const nested = [[1, 2], [3, 4], [5]];

// Use reduce to merge arrays into one
const flatArray = nested.myReduce((acc, curr) => {
  return acc.concat(curr); // combine current array with accumulator
}, []);

console.log("Flattened:", flatArray); // [1, 2, 3, 4, 5]
