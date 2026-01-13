# Week 5: JavaScript Fundamentals - Lab Summary

## ไฟล์ 01-variables.js - 6. Challenge: Create a Person Object

### ผลลัพธ์

=== Challenge: Person Object ===<br>
Student object:<br>
{<br>
firstname: 'Alice',<br>
lastname: 'Smith',<br>
age: 20,<br>
gpa: 3.8,<br>
courses: [ 'HTML', 'CSS', 'JavaScript' ],<br>
isActive: true,<br>
getFullname: [Function: getFullname],<br>
getInfo: [Function: getInfo]<br>
}<br>
Full name: Alice Smith<br>
Info: Alice Smith, Age: 20, GPA: 3.8<br>
Courses: HTML,CSS,JavaScript<br>

### โปรแกรม

console.log("\n=== Challenge: Person Object ===");<br>
//แสดงข้อความ === Challenge: Person Object ===<br>

const student = {<br>
firstname: "Alice",<br>
lastname: "Smith",<br>
age: 20,<br>
gpa: 3.8,<br>
courses: ["HTML", "CSS", "JavaScript"],<br>
isActive: true,<br>
//สร้างตัวแปร object โดยข้างในมี firstname, lastname, age, gpa, courses, isActive<br>

//Method (function in object)<br>
getFullname: function () {<br>
return `${this.firstname} ${this.lastname}`;<br>
},<br>
//สร้างฟังกชันที่เวลาเรียกจะส่งข้อมูล firstname lastname ออกมาพร้อมกันทีเดียว<br>

getInfo: function () {<br>
return `${this.getFullname()}, Age: ${this.age}, GPA: ${this.gpa}<br>`;<br>
},<br>
};<br>
//สร้างฟังก์ชันที่เวลาเรียกจะส่งข้อมูลที่เรียกใช้ฟังก์ชัน Fullname ต่อด้วย ข้อมูล Age และ GPA<br>

console.log("Student object: ");<br>
//แสดงข้อความ Student object: <br>
console.log(student);<br>
//แสดง Object ที่อยู่ในตัวแปรทั้งหมด<br>
console.log("Full name: ", student.getFullname());<br>
//เรียกใช้ฟังก์ชัน Fullname <br>
console.log("Info: ", student.getInfo());<br>
//เรียกใช้ฟังก์ชัน getInfo <br>
console.log("Courses: ", student.courses.join(",")); <br>
//แสดง Courses ทั้งหมดแล้วคั่นแต่ละตัวด้วย ,<br>

### **Key file:** `01-variables.js`

- [ไฟล์ 01-variables.js](01-variable.js)

## ไฟล์ 02-functions.js - 8. Returning Objects, 9. Function as Parameter (Callback)

### ผลลัพธ์

//8 <br>
Returning Object:<br>
{<br>
firstName: 'John',<br>
lastName: 'Doe',<br>
age: 30,<br>
email: 'john.doe@example.com',<br>
getFullName: [Function: getFullName],<br>
getAge: [Function: getAge]<br>
}<br>
Email: john.doe@example.com<br>
Full name: John Doe<br>

//9<br>
Callback Function:<br>
Original: [ 1, 2, 3, 4, 5 ]<br>
Doubled: [ 2, 4, 6, 8, 10 ]<br>
Squared: [ 1, 4, 9, 16, 25 ]<br>

### โปรแกรม

//8<br>
function createUser(firstName, lastName, age) {<br>
return {<br>
firstName, //shorthard for firstName --สำคัญมาก<br>
lastName,<br>
age,<br>
email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,<br>
getFullName() {<br>
//shorthand for getFullName: function() {}<br>
return `${this.firstName} ${lastName}`;<br>
},<br>
getAge() {<br>
return this.age;<br>
},<br>
};<br>
}<br>
//สร้างฟังก์ชันที่รับค่า firstname, lastname, age จากนั้นจะส่งค่า firstname, lastname, age, email กลับ โดยที่ email จะนำชื่อมาทำให้เป็นตัวเล็กทั้งหมดแล้วต่อด้วย . จากนั้นนำนามสกุลมาทำเป็นตัวเล็กและต่อหลัง . สุดท้ายลงท้ายด้วย @example.com ซึ่งในฟังก์ชันนี้ยังมี Method ให้เรียกใช้คือ getFullName() ซึ่งเป็นการส่งค่าชื่อนามสกุลไปพร้อมกัน กับ getAge() ส่งค่าอายุกลับ<br>

console.log("\nReturning Object: ");<br>
const newUser = createUser("John", "Doe", 30);<br>
console.log(newUser);<br>
console.log("Email: ", newUser.email);<br>
console.log("Full name: ", newUser.getFullName());<br>

//9<br>
function processArray(arr, callback) {<br>
const result = [];<br>
for (const item of arr) {<br>
result.push(callback(item));<br>
}<br>
return result;<br>
}<br>
เป็นฟังก์ชันที่รับ Array เข้ามาใส่ในตัวแปรที่ชื่อ arr และรับซึ่งที่ต้องการให้ทำอะไรเข้ามาในตัวแปร callback หลังจากนั้น จะใช้ for ในการวนลูปโดยการดึงทีล่ะค่าจาก arr โดยเก็บไว้ที่ตัวแปร const หลังจากนั้น เมื่อทำตาม call back เสร็จ มันจะ push ไปใส่ใน Array ที่ชื่อ result เมื่อวนจนหมด ก็จะส่งค่า array result กลับ

const numbers = [1, 2, 3, 4, 5];<br>
const doubled = processArray(numbers, (x) => x _ 2);<br>
const squared = processArray(numbers, (x) => x _ x);<br>

console.log("\nCallback Function: ");<br>
console.log("Original: ", numbers);<br>
console.log("Doubled: ", doubled);<br>
console.log("Squared: ", squared);<br>

### **Key file:** `02-functions.js`

- [ไฟล์ 02-functions.js](02-functions.js)

## ไฟล์ 03-control-flow.js - 5. Short-Circuit Evaluation, 7. Form Validation

### ผลลัพธ์

//5<br>
Short-Circuit Evaluation:<br>
User name: John<br>
User profile: undefined<br>

//7<br>
Form Validation:<br>
Valid user: { isValid: true, errors: [] }<br>
Invalid user: {<br>
isValid: false,<br>
errors: [<br>
'Name must be at least 3 characters',<br>
'Valid email is required',<br>
'Mush be 18 or older',<br>
'Password must be at least 6 characters',<br>
'Must agree to terms'<br>
]<br>
}<br>

### โปรแกรม

//5<br>
console.log("\nShort-Circuit Evaluation: ");<br>

const user = { name: "John", age: 25 };<br>
const admin = null;<br>

//OR: use default value<br>
const userName = admin?.name || user.name || "Anonymous";<br>
console.log("User name: ", userName);<br>
//?. คือการใช้ Optional Chaining - เป็นวิธีที่ปลอดภัยในการเข้าถึง properties ของ object ที่อาจเป็น null หรือ undefined<br>
//admin?.name ก็คือ ถ้า admin มีค่าให้เข้าถึง .name ไม่เช่นนั้นให้คืนค่า undefined<br>
//1.admin?.name<br>
// - admin คือ null ❌<br>
// - ไม่ error, ส่งคืน undefined<br>
//2.undefined || user.name<br>
// - user.name คือ "John" ✅<br>
// - ใชค่านี้ → " ้ John"<br>
// 3. ผลลัพธ์: "John"<br>

//7<br>
function validateRegistration(formData) {<br>
//Create validation result object<br>
const errors = [];<br>
//สร้าง Array ที่ชื่อ errors<br>

//Validate name<br>
if (!formData.name || formData.name.trim() === "") {<br>
errors.push("Name is required");<br>
} else if (formData.name.length < 3) {<br>
errors.push("Name must be at least 3 characters");<br>
}<br>
//หาก name ที่รับเข้ามาไม่มีค่า จะ push error เข้าไปใน Array error<br>
//.trim() คือ การลบช่องว่าง

//Validate email<br>
if (!formData.email || formData.email.indexOf("@") === -1) {<br>
errors.push("Valid email is required");<br>
}<br>
//หาก email ที่รับเข้ามาไม่มีค่าหรือไม่มี @ จะ push error เข้าไปใน Array error<br>

//Validate age<br>
if (!formData.age || formData.age < 18) {<br>
errors.push("Mush be 18 or older");<br>
}<br>
//หาก age ที่รับเข้ามาไม่มีค่าหรือมีค่าน้อยกว่า 18 จะ push error เข้าไปใน Array error<br>

//Validate password<br>
if (!formData.password || formData.password.length < 6) {<br>
errors.push("Password must be at least 6 characters");<br>
}<br>
//หาก password ที่รับเข้ามาไม่มีค่าหรือมีความยาวน้อยกว่า 6 จะ push error เข้าไปใน Array error<br>

//check if agree to terms<br>
if (!formData.agreeToTerms) {<br>
errors.push("Must agree to terms");<br>
}<br>
//หาก agreeToTerms ที่รับเข้ามาเป็น false จะ push error เข้าไปใน Array error<br>

return {<br>
isValid: errors.length === 0,<br>
errors: errors,<br>
};<br>
}<br>
//หาก array ของ error ว่าง isValid จะเป็น true แต่หากไม่จะส่งค่า false กลับ หลังจากนั้น จะส่งค่าตัวแปรรของ array error<br>

console.log("\nForm Validation: ");<br>

const validUser = {<br>
name: "John Doe",<br>
email: "john@example.com",<br>
age: 25,<br>
password: "securepass123",<br>
agreeToTerms: true,<br>
};<br>

const invalidUser = {<br>
name: "Jo",<br>
email: "invalidemail",<br>
age: 15,<br>
password: "pass",<br>
agreeToTerms: false,<br>
};<br>

console.log("Valid user: ", validateRegistration(validUser));<br>
console.log("Invalid user: ", validateRegistration(invalidUser));<br>

### **Key file:** `03-control-flow.js`

- [ไฟล์ 03-control-flow.js](03-control-flow.js)

## ไฟล์ 04-loops.js - 9. Chaining methods, 10. Challenge: Student Grades

### ผลลัพธ์

//9<br>
Method chaining:<br>
Even numbers squared: 2²=4, 4²=16, 6²=36, 8²=64, 10²=100<br>
Average: 30<br>

//10<br>
Challenge: Student Analysis<br>
Students: [<br>
{ name: 'Alice', score: 95 },<br>
{ name: 'Bob', score: 75 },<br>
{ name: 'Charlie', score: 85 },<br>
{ name: 'Diana', score: 92 },<br>
{ name: 'Eva', score: 88 }<br>
]<br>
Names: Alice, Bob, Charlie, Diana, Eva<br>
High scorers: Alice (95), Diana (92), Eva (88)<br>
Class average: 87.00<br>
Top scorer: Alice (95)<br>
Summary (sorted):<br>
Alice: 95 (A)<br>
Diana: 92 (A)<br>
Eva: 88 (B)<br>
Charlie: 85 (B)<br>
Bob: 75 (C)<br>

### โปรแกรม

// ─────────────────────────────────<br>
// 9. Chaining methods -- สําคัญมาก<br>
// ─────────────────────────────────<br>

console.log("\nMethod chaining: ");<br>

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];<br>

//Filter even > map to string > join<br>
const evenStrings = data<br>
.filter((n) => n % 2 === 0) //[2, 4, 6, 8, 10]<br>
.map((n) => `${n}²=${n * n}`) //["2²=4", "4²=16", ...]<br>
.join(", "); //คั้นด้วย , "2²=4, 4²=16, ..."<br>
นำตัวแปร data มาเก็บไว้ในตัวแปร evenStrings โดยก่อนเก็บได้ทำการคัดกรองเอาแต่เลขคู่ หลังจากนั้น map โดยการให้คูณกับตัวเอง และหลังจากนั้นคั่นทุกอันด้วย ,

console.log("Even numbers squared: ", evenStrings);<br>

//Calculate average with reduce and length<br>
const numbers2 = [10, 20, 30, 40, 50];<br>
const average = numbers2.reduce((sum, n) => sum + n, 0) / numbers2.length;<br>
console.log("Average: ", average);<br>
//ทำการรวมกัน โดยกำหมดให้ sum = 0 หลังจากที่ บวกกันครบทุกตัวจะหารด้วย จำนวนตัวทั้งหมดที่ทำการรวม

// ─────────────────────────────────<br>
// 10. Challenge: Student Grades<br>
// ─────────────────────────────────<br>

const students = [<br>
{ name: "Alice", score: 95 },<br>
{ name: "Bob", score: 75 },<br>
{ name: "Charlie", score: 85 },<br>
{ name: "Diana", score: 92 },<br>
{ name: "Eva", score: 88 },<br>
];<br>
//สร้าง object 5 รายการ โดยแต่ละรายการมีชื่อกับคะแนนสอบ<br>

console.log("\nChallenge: Student Analysis");<br>
console.log("Students: ", students);<br>

//1.Get all names<br>
const names = students.map((s) => s.name);<br>
console.log("Names: ", names.join(", "));<br>
//แสดงรายชื่อทั้งหมดที่มี และแต่ละอันคั่นด้วย ,<br>

//2.Filter high scorers (>=85)<br>
const hightScorers = students.filter((s) => s.score > 85);<br>
console.log(<br>
"High scorers: ",<br>
hightScorers.map((s) => `${s.name} (${s.score})`).join(", ")<br>
);<br>
//ทำการหาว่าใครคะแนนที่มากกว่า 85 เมื่อได้แล้วจะแสดงชื่อ แล้วก็คะแนน<br>

//3.Calculate class average<br>
const classAverage =<br>
students.reduce((sum, s) => sum + s.score, 0) / students.length;<br>
console.log("Class average: ", classAverage.toFixed(2)); //ทศนิยม 2 ตำแหน่ง<br>
//ทำการหาค่าเฉลี่ยคะแนนสอบ แล้วแสดงผลด้วยทศนิยม 2 ตำแหน่ง

//4.Find top scorer<br>
const topScorer = students.reduce((top, s) => (s.score > top.score ? s : top));<br>
console.log("Top scorer: ", `${topScorer.name} (${topScorer.score})`);<br>
//ทำการหาคนที่คะแนนสูงสุด โดยใช้ reduceเพื่อเปรียบเทียบข้อมูลแบบคู่ต่อคู่<br>

//5.Create summary<br>
const summary = students<br>
.map((s) => ({<br>
...s,<br>
gread: s.score >= 90 ? "A" : s.score >= 80 ? "B" : "C",<br>
}))<br>
.sort((a, b) => b.score - a.score);<br>
console.log("Summary (sorted): ");<br>
summary.forEach((s) => console.log(` ${s.name}: ${s.score} (${s.gread})`));<br>
//ทำการให้เกรดโดยที่ถ้าคะแนนมากกว่าเท่ากับ 90 ได้ A แต่ถ้าไม่จะทำการตรวจสอบว่า มากกว่าเท่ากับ 80 ไหม ถ้าใช่ให้ B ถ้าไม่ให้ C และส่งค่าชื่อ คะแนนที่ได้ ล่ะเกรดกลับ

console.log("\n✅ Activity 4 completed!");<br>

### **Key file:** `04-loops.js`

- [ไฟล์ 04-loops.js](04-loops.js)

## ไฟล์ 05-integration.js - Activity 5: Integration - Quiz Application

### ผลลัพธ์

🎯 === QUIZ APPLICATION === 🎯<br>

QUIZ RESULTS<br>
------------------------------------------------------------<br>
Q1: What is 5 + 3?<br>
Your answer: 9<br>
Correct answer: undefined<br>
❌ WRONG<br>

Q2: What is the capital of Thailand?<br>
Your answer: Bangkok<br>
✅ CORRECT<br>

Q3: What is the largest planet?<br>
Your answer: Neptune<br>
Correct answer: undefined<br>
❌ WRONG<br>

Q4: What is 2^8?<br>
Your answer: 128<br>
Correct answer: undefined<br>
❌ WRONG<br>

Q5: Which is NOT a JavaScript data type<br>
Your answer: class<br>
✅ CORRECT<br>

------------------------------------------------------------<br>
FINAL SCORE: 2 / 5 (40.0%)<br>
GRADE: F<br>

FEEDBACK:<br>
💪🏻 Keep practicing. You'll improve!<br>

📊📊 STATISTICS:<br>
Total questions: 5<br>
Correct: 2<br>
Incorrect: 3<br>
Success rate: 40.0%<br>

Answer breakdown:<br>
✅ Correct: 2<br>
❌ Incorrect: 3<br>

✅ All activities completed!<br>

### โปรแกรม

console.log("🎯 === QUIZ APPLICATION === 🎯\n");<br>

//Quiz data<br>
const quizzes = [<br>
{<br>
question: "What is 5 + 3?",<br>
options: ["8", "7", "6", "9"],<br>
correctAnswer: 0, //Index of correct option<br>
},<br>
{<br>
question: "What is the capital of Thailand?",<br>
options: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"],<br>
correctAnswer: 1,<br>
},<br>
{<br>
question: "What is the largest planet?",<br>
options: ["Mars", "Saturn", "Jupiter", "Neptune"],<br>
correctAnswer: 2,<br>
},<br>
{<br>
question: "What is 2^8?",<br>
options: ["128", "256", "64", "512"],<br>
correctAnswer: 2,<br>
},<br>
{<br>
question: "Which is NOT a JavaScript data type",<br>
options: ["string", "class", "symbol", "boolean"],<br>
correctAnswer: 1,<br>
},<br>
];<br>
//สร้าง object ของคำถาม<br>

//Quiz results<br>
let results = [];<br>
//สร้าง array ไว้เก็บคะแนน<br>

//Process each quiz<br>
quizzes.forEach((quiz, index) => {<br>
const userAnswer = Math.floor(Math.random() \* 4); //จำลองการตอบ quiz<br>
const isCorrect = userAnswer === quiz.correctAnswer; //ตรวจสอบว่าตรงกับเฉลยหรือไม่<br>

results.push({<br>
questionNum: index + 1,//เลขข้อคำถาม <br>
question: quiz.question,//แสดงคำถาม <br>
userAnswer: quiz.options[userAnswer], //คำตอบที่ตอบ<br>
correctAnswer: quiz.options[quiz.correctAnswer], //คำตอบที่ถูกต้อง<br>
isCorrect: isCorrect, //ถูกหรือไม่<br>
});<br>
});<br>

//Display results<br>
console.log("QUIZ RESULTS");<br>
console.log("-".repeat(60)); //ทำซ้ำ - 60 รอบ<br>

results.forEach((result) => {<br>
const status = result.isCorrect ? "✅ CORRECT" : "❌ WRONG";<br>
console.log(`Q${result.questionNum}: ${result.question}`);<br>
console.log(` Your answer: ${result.userAnswer}`);<br>
if (!result.isCorrect) {<br>
console.log(` Correct answer: ${results.correctAnswer}`);<br>
}<br>
console.log(` ${status}`);<br>
console.log();<br>
});<br>

//Calculate score<br>
const correctCount = results.filter((r) => r.isCorrect).length;<br>
const score = (correctCount / results.length) \* 100;<br>

console.log("-".repeat(60));<br>
console.log(<br>
`FINAL SCORE: ${correctCount} / ${results.length} (${score.toFixed(1)}%)`<br>
);<br>

let grade;<br>
if (score >= 90) {<br>
grade = "A";<br>
} else if (score >= 80) {<br>
grade = "B";<br>
} else if (score >= 70) {<br>
grade = "C";<br>
} else if (score >= 60) {<br>
grade = "D";<br>
} else {<br>
grade = "F";<br>
}<br>
//ตรวจสอบว่าได้เกรดเท่าไหร่<br>

console.log(`GRADE: ${grade}`);<br>

//Feedback<br>
console.log("\nFEEDBACK: ");<br>
if (score === 100) {<br>
console.log("🌟 Perfect score! Excellent work!");<br>
} else if (score >= 80) {<br>
console.log("👍 Great job! Keep practicing.");<br>
} else if (score >= 60) {<br>
console.log("📚 Good effort. Review the material and try again.");<br>
} else {<br>
console.log("💪🏻 Keep practicing. You'll improve!");<br>
}<br>
//ทำการฟีดแบคคะแนนแต่ล่ะช่วงต่างๆ

//Statistics<br>
console.log("\n📊📊 STATISTICS: ");<br>
console.log(`Total questions: ${results.length}`);<br>
console.log(`Correct: ${correctCount}`);<br>
console.log(`Incorrect: ${results.length - correctCount}`);<br>
console.log(`Success rate: ${score.toFixed(1)}%`);<br>
//แสดงว่าคำถามมีกี่ข้อ ตอบถูกกี่ข้อ ตอบผิดกี่ข้อ แล้วคิดเป็นกี่เปอร์เซ้น

//Category breakdown (if applicable)<br>
const byCorrectness = results.reduce(<br>
(acc, r) => {<br>
acc[r.isCorrect ? "correct" : "incorrect"]++;<br>
return acc;<br>
},<br>
{<br>
correct: 0,<br>
incorrect: 0,<br>
}<br>
);<br>

console.log("\nAnswer breakdown: ");<br>
console.log(` ✅ Correct: ${byCorrectness.correct}`);<br>
console.log(` ❌ Incorrect: ${byCorrectness.incorrect}`);<br>

console.log("\n✅ All activities completed!");<br>
console.log("━".repeat(60));<br>

### **Key file:** `05-integration.js`

- [ไฟล์ 05-integration.js](05-integration.js)
