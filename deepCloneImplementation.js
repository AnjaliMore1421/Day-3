// Task: Implement deep cloning without using JSON.parse(JSON.stringify)
// Description:
// - Created a custom deepClone function
// - Handles nested objects and arrays
// - Avoids reference sharing

function deepClone(obj) {
  // If obj is null or a primitive (number, string, boolean), return it directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // If obj is an array, create a new array and recursively clone each element
  if (Array.isArray(obj)) {
    let copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  // If obj is an object, create a new object and recursively clone each property
  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
}

// Example usage

const original = {
  name: "Anjali",
  address: {
    city: "Pune"
  },
  hobbies: ["reading", "coding"]
};

// Create a deep clone
const cloned = deepClone(original);

// Modify the cloned object
cloned.address.city = "Mumbai"; // Does not affect original
cloned.hobbies.push("music");   // Original array remains unchanged

console.log("Original:", original);
// Output: { name: "Anjali", address: { city: "Pune" }, hobbies: ["reading", "coding"] }

console.log("Cloned:", cloned);
// Output: { name: "Anjali", address: { city: "Mumbai" }, hobbies: ["reading", "coding", "music"] }
