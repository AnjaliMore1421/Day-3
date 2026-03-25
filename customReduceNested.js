// Task: Write a custom reduce function to compute nested structures
// Description:
// - Implemented custom myReduce method
// - Used it to calculate total from nested object data
// - Used it to flatten nested arrays

// Custom Reduce Implementation
Array.prototype.myReduce = function (cb, initial) {
  let acc = initial;
  let startIndex = 0;

  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

//  Task: Compute total from nested structure

const data = [
  { name: "A", scores: [10, 20] },
  { name: "B", scores: [30, 40] }
];

// Using custom reduce
const totalScore = data.myReduce((acc, student) => {
  const sum = student.scores.myReduce((a, b) => a + b, 0);
  return acc + sum;
}, 0);

console.log("Total Score:", totalScore); // 100

//  Another Example: Flatten nested array

const nested = [[1, 2], [3, 4], [5]];

const flatArray = nested.myReduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log("Flattened:", flatArray); // [1, 2, 3, 4, 5]
