// ============================================
// Activity 4: Loops & Array Methods
// ============================================

console.log("=== Loops & Array Methods Practice ===\n");

// ─────────────────────────────────
// 1. Traditional for loop
// ─────────────────────────────────

console.log("For loop (0-4): ");
for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
}

// ─────────────────────────────────
// 2. while loop
// ─────────────────────────────────

console.log("\nWhile loop (count down): ");
let count = 5;
while (count > 0) {
  console.log(` ${count}...`);
  count--;
}

console.log(" Blastoff! 🚀");

// ─────────────────────────────────
// 3. for...of loop (values)
// ─────────────────────────────────
const fruits = ["apple", "banana", "orange"];
console.log("\nFor...of loop (fruits): ");
for (const fruit of fruits) {
  console.log(` - ${fruit}`);
}

// ─────────────────────────────────
// 4. for...in loop (keys - for objects)
// ─────────────────────────────────

const person = { name: "John", age: 25, city: "Bangkok" };
console.log("\nFor...in loop (person properties): ");
for (const key in person) {
  console.log(` ${key}: ${person[key]}`);
}

// ─────────────────────────────────
// 5. forEach (side effects)
// ─────────────────────────────────

console.log("\nforEach (with index): ");
fruits.forEach((fruit, index) => {
  console.log(` ${index}: ${fruit}`);
});

// ─────────────────────────────────
// 6. map (transform to new array) -- สําคัญมาก
// ─────────────────────────────────

const numbers = [1, 2, 3, 4, 5];
console.log("\nmap - transform elements: ");
console.log("Original: ", numbers);

const doubled = numbers.map((n) => n * 2);
console.log("Doubled: ", doubled);

const squared = numbers.map((n) => n * n);
console.log("Squared: ", squared);

const asStrings = numbers.map((n) => `Number: ${n}`);
console.log("As strings: ", asStrings);

// ─────────────────────────────────
// 7. filter (select matching elements) -- สําคัญมาก
// ─────────────────────────────────

console.log("\nfilter - select elements: ");
//กรองข้อมูล

const evens = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers: ", evens);

const odds = numbers.filter((n) => n % 2 !== 0);
console.log("Odd numbers: ", odds);

const greaterThan2 = numbers.filter((n) => n > 2);
console.log("Numbers > 2: ", greaterThan2);

// ─────────────────────────────────
// 8. reduce (accumulate to single value) -- สําคัญมาก
// ─────────────────────────────────

console.log("\nreduce - accumulate: ");

const sum = numbers.reduce((total, n) => total + n, 0); //ค่าเริ่มต้น 0
console.log("Sum: ", sum);

const product = numbers.reduce((total, n) => total * n, 1); //ค่าเริ่มต้น 1
console.log("Product: ", product);

const concatenated = numbers.reduce((str, n) => str + n, "");
console.log("Concatenated: ", concatenated);

//count occurrences
const words = ["apple", "banana", "apple", "orange", "apple"];
const wordCount = words.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1; //ถ้าไม่มีคำนั้นมาก่อนจะเป็น 0
  return counts;
}, {});
console.log("Word count: ", wordCount);

// ─────────────────────────────────
// 9. Chaining methods -- สําคัญมาก
// ─────────────────────────────────

console.log("\nMethod chaining: ");

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Filter even > map to string > join
const evenStrings = data
  .filter((n) => n % 2 === 0) //[2, 4, 6, 8, 10]
  .map((n) => `${n}²=${n * n}`) //["2²=4", "4²=16", ...]
  .join(", "); //คั้นด้วย , "2²=4, 4²=16, ..."

console.log("Even numbers squared: ", evenStrings);

//Calculate average with reduce and length
const numbers2 = [10, 20, 30, 40, 50];
const average = numbers2.reduce((sum, n) => sum + n, 0) / numbers2.length;
console.log("Average: ", average);

// ─────────────────────────────────
// 10. Challenge: Student Grades
// ─────────────────────────────────

const students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 85 },
  { name: "Diana", score: 92 },
  { name: "Eva", score: 88 },
];

console.log("\nChallenge: Student Analysis");
console.log("Students: ", students);

//1.Get all names
const names = students.map((s) => s.name);
console.log("Names: ", names.join(", "));

//2.Filter high scorers (>=85)
const hightScorers = students.filter((s) => s.score > 85);
console.log(
  "High scorers: ",
  hightScorers.map((s) => `${s.name} (${s.score})`).join(", ")
);

//3.Calculate class average
const classAverage =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log("Class average: ", classAverage.toFixed(2)); //ทศนิยม 2 ตำแหน่ง

//4.Find top scorer
const topScorer = students.reduce((top, s) => (s.score > top.score ? s : top));
console.log("Top scorer: ", `${topScorer.name} (${topScorer.score})`);

//5.Create summary
const summary = students
  .map((s) => ({
    ...s,
    gread: s.score >= 90 ? "A" : s.score >= 80 ? "B" : "C",
  }))
  .sort((a, b) => b.score - a.score);
console.log("Summary (sorted): ");
summary.forEach((s) => console.log(` ${s.name}: ${s.score} (${s.gread})`));

console.log("\n✅ Activity 4 completed!");
