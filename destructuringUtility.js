// Task: Create a reusable destructuring utility
// Description:
// - Extract values from objects using specific keys
// - Supports missing keys (returns undefined)
// - Can be reused for any object

function destructure(obj, keys) {
  const result = {};

  // Loop through the requested keys
  keys.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      // If the key exists, copy the value
      result[key] = obj[key];
    } else {
      // If the key doesn't exist, assign undefined
      result[key] = undefined;
    }
  });

  return result;
}

// Example 1: Extract existing keys
const user = {
  name: "Anjali",
  age: 22,
  city: "Pune"
};

const output1 = destructure(user, ["name", "city"]);

console.log("Output 1:", output1);
// Output: { name: "Anjali", city: "Pune" }

// Example 2: Include a missing key
const output2 = destructure(user, ["name", "country"]);

console.log("Output 2:", output2);
// Output: { name: "Anjali", country: undefined }
