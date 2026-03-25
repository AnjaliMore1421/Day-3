// Task: Implement deep cloning without using JSON.parse(JSON.stringify)
// Description:
// - Created a custom deepClone function
// - Handles nested objects and arrays
// - Avoids reference sharing

function deepClone(obj) {
  // Handle null or primitive values
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    let copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  // Handle objects
  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
}

//  Example

const original = {
  name: "Anjali",
  address: {
    city: "Pune"
  },
  hobbies: ["reading", "coding"]
};

const cloned = deepClone(original);

// Modify cloned object
cloned.address.city = "Mumbai";
cloned.hobbies.push("music");

console.log("Original:", original);
// { name: "Anjali", address: { city: "Pune" }, hobbies: ["reading", "coding"] }

console.log("Cloned:", cloned);
// { name: "Anjali", address: { city: "Mumbai" }, hobbies: ["reading", "coding", "music"] }

