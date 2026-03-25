// Task: Create a reusable destructuring utility
// Description:
// - Extract values from objects using keys
// - Supports default values
// - Reusable for different objects

function destructure(obj, keys) {
  const result = {};

  keys.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    } else {
      result[key] = undefined;
    }
  });

  return result;
}

//  Example 1

const user = {
  name: "Anjali",
  age: 22,
  city: "Pune"
};

const output1 = destructure(user, ["name", "city"]);

console.log("Output 1:", output1);
// { name: "Anjali", city: "Pune" }

//  Example 2 (missing key)

const output2 = destructure(user, ["name", "country"]);

console.log("Output 2:", output2);
// { name: "Anjali", country: undefined }
