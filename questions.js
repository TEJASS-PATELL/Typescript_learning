"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let age = 21;
let Username = "Tejas";
let loggedIN = true;
console.log("Hi", Username, "age", age, "is leggedIN", loggedIN);
//* any vs unknown
// any: disables type checking (unsafe).
let x = "hello";
x.toUpperCase();
console.log(x.toUpperCase());
// unknown: safer alternative; must check type before use.
let y = "this is unknown data type";
if (typeof y === "string") {
    // y.toUpperCase();
    console.log(y.toUpperCase());
    console.log(y);
}
else
    console.log(y);
//* Union type-
let id;
id = 124;
console.log(id);
id = "this is union type example";
console.log(id);
id = true;
console.log(id);
function getuniontype(input) {
    if (typeof input === "string") {
        console.log("This is String", input.toUpperCase());
    }
    else if (typeof input === "number") {
        console.log("This is number in union type", input.toFixed(1));
    }
}
getuniontype("hello union");
getuniontype(14.5242);
let customID = 188;
console.log(customID);
const user = { id: 1, name: "Tejas" };
console.log(user);
function find(obj) {
    console.log("This is : ", obj.name, "email is : ", obj.email, "gender is : ", obj.gender);
}
const user1 = {
    name: "xyz",
    age: 21,
    email: "xyz@gmail.com",
    gender: "male",
    COLLAGE: "none"
};
// find({ name: "tejas", age: 22, email: "abc2@gmail.com", gender: "male" });
find(user1);
//* null & undefined types
let c;
let w = null;
console.log(w);
let zy;
zy = "king";
console.log(zy);
zy = null;
console.log(zy);
// y = 10; // ❌ Error
let zx;
console.log(zx);
//* void - it is used for function that does not return a value only console.
function logMessage(msg) {
    console.log(msg);
}
logMessage("heelooe eoee e ee eeee add ee");
//* never- type of function that never return(error or infinite loop)
// function throwErr(): never {
//     console.log("ddddddddddddd")
//   throw new Error("Oops!");
// }
// throwErr();
//? | Feature      | `void`                    | `never`                                          |
//? | ------------ | ------------------------- | ------------------------------------------------ |
//? | Return value | Nothing (`undefined`)     | Never returns                                    |
//? | Use case     | Normal functions          | Error functions / infinite loops                 |
//? | Can return   | `undefined` (optional)    | Nothing at all                                   |
//? | Example      | `function log(): void {}` | `function crash(): never { throw new Error(); }` |
function defaultpara(name = "Tejas_Patel") {
    console.log(name);
}
defaultpara();
class Compamy {
    //* Note- inside class always use this keyword
    constructor(name, price, speed) {
        this.name = name;
        this.price = price;
        this.speed = speed;
    }
    Carspeed() {
        console.log(this.name, "Speed is: ", this.speed);
    }
}
const Cars = new Compamy("BMW", 5000000, "200km/h");
Cars.Carspeed();
//* Abstract class-
class Students {
    constructor(StudentName, StudentID, Age) {
        this.StudentName = StudentName;
        this.StudentID = StudentID;
        this.Age = Age;
    }
    Calculate() {
        console.log("This is student name ", this.StudentName, this.StudentID, this.Age);
    }
}
class Learning extends Students {
    constructor(StudentName, StudentID, Age, StudentBranch, Marks) {
        super(StudentName, StudentID, Age); //* parent constructor call
        this.StudentBranch = StudentBranch;
        this.Marks = Marks;
    }
    ExamMarks() {
        console.log(`${this.StudentName} got ${this.Marks} marks in branch ${this.StudentBranch}`);
        // console.log(this.StudentID); // ❌ Error: private
        console.log(this.Age); // ✅ protected accessible in child
    }
}
const newStudent = new Learning("Tejas Patel", 72, 21, "CSE", 7);
newStudent.ExamMarks();
newStudent.Calculate();
// class Users {
//     constructor(public readonly mname: string) { 
//         console.log(mname);
//     }
//     changename() {      //* Methods
//         // this.mname = "hello"; // ❌ readonly property change nahi hoti
//     }
// }
// let s1 = new Users("Tejas");
// s1.changename();
// console.log(s1);
//* Generics-
function generics(value) {
    return value;
}
console.log(generics("hello generics"));
console.log(generics(25));
const s1 = {
    name: "Tejas" // age optional ho gaya
};
const s2 = {
    name: "Tejas",
    age: 21 // ab ye dena compulsory hai if optional then also
};
console.log(s1.name, s2.age, s2.name);
const s3 = { name: "Tejas", age: 21 };
const s4 = {
    name: "Tejas",
    email: "tejas@example.com"
};
console.log(s4.email);
// console.log(s4.age);  not accessable
//* Type assertion-  Type assertion ka matlab hai → tum compiler ko forcefully bata rahe ho ki “Trust me, mujhe pata hai ye value kis type ki hai”. Ye basically TypeScript ko hint deta hai ki ek value ko kis type ke tarah treat karna hai.
let value = "Hello TypeScript";
let strLength = value.length;
console.log(strLength);
const s11 = { id: 101, name: "Tejas" };
s11.name = "Patel"; // ✅ allowed
// s11.id = 202;         // ❌ Error: Cannot assign to 'id' because it is a read-only property
//* readonly with Array - Agar array readonly declare kiya → tum uske elements ko replace nahi kar sakte, push/pop nahi kar sakte. Lekin tum read (access) kar sakte ho.
// const arr: number[] = [1,2,3,4,5];
const arr = [1, 2, 3, 4, 5];
// console.log(arr.push(8)); 
console.log(arr);
const s22 = {
    name: "Tejas",
    age: 21,
    collegeName: "XYZ University"
};
console.log(s22);
const newDrink = { brand: "Coca Cola", price: 20 };
console.log(newDrink);
//* aync/await-  (Async function ka return hamesha Promise hota hai.)
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return "data";
    });
}
console.log(fetchData());
//* object declaration-
// const myObj: { name: string, desc: string, est?: number } = {
//     name: "GeeksforGeeks",
//     desc: "A Computer Science Portal",
// };
// myObj.est = 89;
// console.log(myObj);
//* arrow function-
const typedArrowFunc = (org_name, desc) => {
    let company = `Organization: ${org_name}, Description: ${desc}`;
    return company;
};
console.log(typedArrowFunc("GeeksforGeeks", "A Computer Science Portal"));
// Prints:
//* enums- enum ka matlab hota hai → set of named constants.
//* Matlab agar tumhare pass limited fixed values hain jo repeat hone wali hain, unko hardcode karne ke bajaye tum enum bana sakte ho.
//* Ye tumhare code ko clean aur maintainable banata hai.
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["south"] = 1] = "south";
    direction[direction["east"] = 2] = "east";
    direction[direction["west"] = 3] = "west"; //3
})(direction || (direction = {}));
let move = direction.east;
console.log(move);
//! By default numbers assign hote hain 0 se start hoke.
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["User"] = "USER";
    Roles["Guest"] = "GUEST";
})(Roles || (Roles = {}));
let currentRole = Roles.Admin;
console.log(currentRole); // 👉 "ADMIN"
//! Jab tumhe human-readable value chahiye (jaise database me ya API me bhejne ke liye), tab string enums use karte hain.
