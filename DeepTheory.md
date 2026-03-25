# Day 3 – Full Deep Content

Deep Theory

---

 1) Arrays: internal structure, amortized time, sparse arrays.

  1. Internal Structure of Arrays 
At a low level, arrays are contiguous blocks of memory.  

 working:  
- Elements are stored next to each other in memory  
- Each element is accessed using an index  
- Address calculation is fast using:  

"Address"="Base Address"+("index"×"size of element")

---

2. Amortized Time Complexity : 
Average time taken per operation over many operations.  

 Example – push() in JavaScript  

```js
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);

Even though resizing is costly, it doesn’t happen often, so overall performance is O(1) on average.

3. Sparse Array :
An array where some indexes are empty (holes).

let arr = [];
arr[0] = "A";
arr[5] = "B";

console.log(arr);
// ["A", empty × 4, "B"]

Characteristics:

Missing elements between indexes
Length is based on highest index + 1
Memory inefficient (in some cases)


 2)Custom implementations of map, filter, reduce.

   1. map() – transforms each element

Array.prototype.myMap = function(cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

Example :

let arr = [1, 2, 3];
let output = arr.myMap(x => x * 2);
console.log(output); // [2, 4, 6]

 2. filter() – returns elements that pass condition

Array.prototype.myFilter = function(cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Example :

let arr = [1, 2, 3, 4];
let output = arr.myFilter(x => x % 2 === 0);
console.log(output); // [2, 4]

3.reduce() – reduces array to single value

Array.prototype.myReduce = function(cb, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    acc = acc !== undefined 
      ? cb(acc, this[i], i, this) 
      : this[i];
  }
  return acc;
};

Example :

let arr = [1, 2, 3, 4];
let output = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(output); // 10


3) Object data structures & prototypes.

Objects (Data Structure):

Store data in key–value pairs
Keys are strings (or symbols), values can be anything
let user = {
  name: "Anjali",
  age: 22
};

console.log(user.name); // Anjali

Prototypes:

Every object in JavaScript has a hidden prototype (proto)
Used for inheritance (sharing properties/methods)
let obj = {};
console.log(obj.__proto__ === Object.prototype); // true

Example (Prototype Inheritance):

let animal = {
  eats: true
};

let dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (from prototype)


4) Deep vs shallow copy mechanics.

 1.Deep Copy: Copies all levels (no shared reference)

Example -

let obj1 = { name: "Anjali", address: { city: "Pune" } };
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Pune (unchanged)

2.Shallow Copy:</b>

Copies only the top level
Nested objects still share the same reference

Example -

let obj1 = { name: "Anjali", address: { city: "Pune" } };
let obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Mumbai (changed)


5) Destructuring patterns.

Extract values from arrays/objects into variables.

 1. Array Destructuring</b>

let arr = [1, 2, 3];
let [a, b, c] = arr;

console.log(a, b, c); // 1 2 3

 2. Object Destructuring</b>

let user = { name: "Anjali", age: 22 };
let { name, age } = user;

console.log(name, age); // Anjali 22

 3. Default Values

let { city = "Pune" } = {};
console.log(city); // Pune

<b>4. Renaming Variables</b>

let { name: userName } = { name: "Anjali" };
console.log(userName); // Anjali
