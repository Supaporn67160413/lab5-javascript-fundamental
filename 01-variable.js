// ============================================
// Activity 1: Variables & Data Types
// ============================================

console.log("=== Variables & Data Types Practice ===\n");

// ─────────────────────────────────
// 1. Using const vs let
// ─────────────────────────────────

//Good: const for constants
const MAX_USERS = 100;
const PI = 3.14159;
const GRAVITY = 9.8;

console.log("Constants: ");
console.log("MAX_USERS: ", MAX_USERS);
console.log("PI: ", PI);

//Good: Let for variables that change
let count = 0;
count++; //เพิ่มจำนวนตัวแปร count ทีละ 1
count++;
console.log("\nVatiable (let): ");
console.log("count after increment: ", count);

//Bad: var (avoid!)
//var oldStyle = "Don't use this";

// ─────────────────────────────────
// 2. Primitive Data Types
// ─────────────────────────────────

console.log("\n=== Primitive Data Types ===");

//Numbers
const age = 25;
const height = 5.9;
const temperature = -10;

console.log("Numbers: ", age, height, temperature);

//String
const firstName = "John";
const lastname = "Doe";
const fullname = `${firstName} ${lastname}`; //Template literal
console.log("Strings: ", fullname);

//Booleans
const isStudent = true;
const isTeacher = false;
console.log("Booleans: ", "isStudent: ", isStudent, " isTeacher: ", isTeacher);

//null & undefined
const emptyValue = null;
let noValue;
console.log("null: ", emptyValue);
console.log("undefined: ", noValue);

// ─────────────────────────────────
// 3. Object Data Types
// ─────────────────────────────────

console.log("\n=== Object Data Types ===");

//Array
const fruits = ["apple", "banana", "orange"];
console.log("Array: ", fruits);
console.log("First fruit: ", fruits[0]);
console.log("Array length: ", fruits.length);

//Object
const person = {
  name: "John",
  age: 25,
  city: "Bangkok",
  isStudent: true,
};
console.log("Object: ", person);
console.log("Person name: ", person.name);
console.log("Person age: ", person.age);

// ─────────────────────────────────
// 4. typeof Operator
// ─────────────────────────────────

console.log("\n=== typeof Operator ==="); //เช็คประเภทตัวแปร
console.log("typeof 25: ", typeof 25);
console.log("typeof 'hello': ", typeof "hello");
console.log("typeof true: ", typeof true);
console.log("typeof undefined: ", typeof undefined);
console.log("typeof []: ", typeof []); //"object" (ทำไมถึงเป็น object)
//วิธีตรวจสอบ Array อย่างถูกต้อง:
//Array.isArray(arr) //true
//arr instanceof Array //ture
console.log("typeof {}: ", typeof {}); //"object"
console.log("typeof (() => {}): ", typeof (() => {})); //"function"

// ─────────────────────────────────
// 5. Type Coercion Examples
// ─────────────────────────────────

console.log("\n=== Type Coercion ===");

//Implicit coercion (auto)
console.log("'5' + 2: ", "5" + 2); //"52" (String concat)
console.log("'5' - 2: ", "5" - 2); // 3 (numeric)
console.log("'5' * 2: ", "5" * 2); // 10 (numeric)
console.log("true + 1: ", true + 1); // 2 ซึ่ง true มีค่าเป็น 1 อยู่แล้ว

//Explicit coercion
console.log("\nExplicit coercion: ");
console.log("String(25): ", String(25));
console.log("Number('25'): ", Number("25"));
console.log("Boolean(1): ", Boolean(1));
console.log("Boolean(0): ", Boolean(0));
console.log("Boolean('hello'): ", Boolean("hello")); //มีข้อความอยู่เป็นจริง หากเป็นค่าว่างจะเป็นเท็จ

// ─────────────────────────────────
// 6. Challenge: Create a Person Object
// ─────────────────────────────────

console.log("\n=== Challenge: Person Object ===");

const student = {
  firstname: "Alice",
  lastname: "Smith",
  age: 20,
  gpa: 3.8,
  courses: ["HTML", "CSS", "JavaScript"],
  isActive: true,

  //Method (function in object)
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },

  getInfo: function () {
    return `${this.getFullname()}, Age: ${this.age}, GPA: ${this.gpa}`;
  },
};

console.log("Student object: ");
console.log(student);
console.log("Full name: ", student.getFullname());
console.log("Info: ", student.getInfo());
console.log("Courses: ", student.courses.join(",")); //คั่นแต่ละตัวด้วย ,

// ─────────────────────────────────
// 7. Truthy vs Falsy
// ─────────────────────────────────

console.log("\n=== Truthy vs Falsy ===");

//Falsy values
const falsyValues = [0, "", null, undefined, false, NaN];
console.log("Falsy values: ");
falsyValues.forEach((val) => {
  console.log(`${typeof val === "string" ? `"${val}"` : val}: ${Boolean(val)}`);
});

//Truthy values
const truthyValues = [1, "hello", true, [], {}, () => {}];
console.log("\nTruthy values: ");
truthyValues.forEach((val) => {
  const display = Array.isArray(val)
    ? "[]"
    : typeof val === "function"
    ? "() => {}"
    : typeof val === "object"
    ? "{}"
    : val;

  console.log(` ${display}: ${Boolean(val)}`);
});

console.log("\n✅ Activity 1 completed!");
