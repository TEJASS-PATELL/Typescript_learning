"use strict";
//*  What is TypeScript?
// TypeScript ek superset hai JavaScript ka – iska matlab hai ki TypeScript mein JavaScript ka har code chalega, lekin TypeScript mein extra features bhi milte hain — jaise Type Safety, Interfaces, Classes, Access Modifiers, etc.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//* 🔥 Why TypeScript? (Real-Life Analogy)
// JavaScript ko samjho jaise ek whiteboard marker – aap kuch bhi likh sakte ho, galat bhi sahi bhi, koi nahi rokega. Lekin agar aap galti se important data hata doge, toh mushkil ho sakti hai.
// TypeScript ek smart marker jaisa hai jo galti hone se pehle hi warning de deta hai — “Bhai yeh variable number hona chahiye, tum string de rahe ho!”
//* ✅ Example:
// let age: number = 25;
// age = "Tejas";  // ❌ Error: 'string' is not assignable to 'number'
// Yahan TypeScript compile time pe hi bata dega ki yeh galat hai. JavaScript runtime pe error dega — tab tak late ho chuka hoga.
//* 💥 Difference Between TypeScript and JavaScript (Table for Interview)
// Feature	JavaScript	TypeScript
// Type Checking	❌ No type checking	✅ Compile-time type checking
// Error Detection	❌ Run-time errors	✅ Compile-time errors
// Code Scalability	❌ Difficult in large apps	✅ Great for large scale apps
// Interfaces & Types	❌ Not supported	✅ Fully supported
// Modern Features	✅ Limited ES6+	✅ All ES6+ + Extra features
// Learning Curve	✅ Easy	🔶 Slightly steeper
var a = 10;
var b = 20;
//* Interview Note: 'var' ka use avoid karo. Ye function scoped hota hai, block scoped nahi.
//* Prefer using let or const in modern TypeScript or JavaScript.
//*-------------------------------------
//* Array
var arr = [1, 2, 3, 4, "Hello"];
//* Mixed array (number + string) -> TypeScript ise (number | string)[] maane ga.
//* Interview Point: Always define type explicitly for better code readability and error checking.
// let arr5: number[] = [1, 2, 3, 4, "Hello"];
//* ❌ Error: string "Hello" allowed nahi hai kyunki array ka type number[] hai.
var arr1 = [1, 2, 3, 4, { name: "Tejas" }, { age: 22 }];
//* Array with number and object types. Iska inferred type: (number | {name: string} | {age: number})[].
// [], {}, () => Reference types (Array, Object, Function)
//? Yeh reference types heap memory me store hote hain, aur variables me unka reference (address) hota hai, actual data nahi.
//*-------------------------------------
//* Tuples -> Fixed length & fixed type array
var arr3 = [10, "hello", false];
//* Interview Tip: Tuple ka use tab karo jab tumhe exact fixed order chahiye ho types ka.
//*-------------------------------------
//* Enums -> Set of named constants
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["ABONDON"] = "code 500";
    StatusCode["NOTFOUND"] = "code 404";
})(StatusCode || (StatusCode = {}));
UserRole.ADMIN;
//* Interview Point: Enums strongly typed constants ke liye use hote hain (Role-based access control, status codes).
//*-------------------------------------
//* Primitive Types
var d;
d = 25;
// d = "hello";  //❌ Error
var v;
v = "learn";
// v = 45; //❌ Error
var f; // *Implicit type: any
f = 99;
f = "system";
f.toUpperCase(); // ✅ Because latest value is string
var q;
q = 45;
q = "anyone";
// q.toUpperCase(); // ❌ Error: unknown ko pehle type check karna padta hai
if (typeof q === "string") {
    q.toLocaleLowerCase(); // ✅ Safe
}
//* unknown type -> safer alternative of 'any'. Use karo jab exact type pata nahi ho.
//*-------------------------------------
//* null & undefined types
var c;
var w = null;
var y;
y = "king";
y = null;
// y = 10; // ❌ Error
var x;
function find(obj) { }
find({ name: "tejas", age: 22, email: "abc2@gmail.com", gender: "male" });
function findStudent(object) {
    console.log(object.Collage_name);
}
var xyz;
xyz = 90;
var system;
system = 1.45;
system = "hello";
system = false;
system = null;
function abcde(obj) { }
abcde(40);
//*-------------------------------------
//* Classes & Objects
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 12000;
        this.category = "Digital";
    }
    return Device;
}());
var d1 = new Device();
var d2 = new Device();
//* Interview Note: TypeScript classes me default values set kar sakte ho directly.
//* Constructor with parameter properties
var Bottle = /** @class */ (function () {
    function Bottle(name, price) {
        this.name = name;
        this.price = price;
    }
    return Bottle;
}());
var ob1 = new Bottle("Maths", 800);
console.log(ob1);
//* Interview Tip: public/private likhne se constructor ke andar hi properties ban jaati hain.
//* Parameterized class with default values
var Music = /** @class */ (function () {
    function Music(name, writter, thumbnail, length) {
        if (thumbnail === void 0) { thumbnail = "thumbnail.jpg"; }
        this.name = name;
        this.writter = writter;
        this.thumbnail = thumbnail;
        this.length = length;
        this.thumbnail = "thumbnail.png"; // override default value
    }
    return Music;
}());
var ob2 = new Music("Tera Ghata", "Gajendra Verma", "", 2000);
console.log(ob2);
//*-------------------------------------
//* this keyword: current object ko refer karta hai. Important in OOPs context
//* Access Modifiers -> public, private, protected
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.changename = function () {
        // this.name = "hello"; // ❌ readonly property change nahi hoti
    };
    return User;
}());
var s1 = new User("Tejas");
s1.changename();
console.log(s1);
//* readonly -> ek bar set hone ke baad change nahi ho sakta.
//* Interview Tip: OOPs ke principles jaise encapsulation, abstraction jaroor revise karo.
//*-------------------------------------
//* MISSING & IMPORTANT TOPICS FOR INTERVIEWS:
//* 🔴 These are also frequently asked in interviews at Google, Microsoft, Amazon, etc.
//! 1. **Generics** => type-safe reusable code banane ke liye (functions, classes, interfaces me use hota hai)
//! Example:
function identity(arg) {
    return arg;
}
identity(5);
identity("hello");
//! 2. **Type Assertion** => Developer ko pata hai ki value ka type kya hai
var someValue = "I am string";
var strLength = someValue.length;
var obj = { name: "X", age: 30 };
//! 4. **Type Inference** => TypeScript khud se type detect karta hai
var num = 5; // inferred as number
//! 6. **Difference: Interface vs Type**
// - Interface extend kar sakta hai aur merge ho sakta hai
// - Type zyada flexible hai, tuples, unions, intersection support karta hai
//! 7. **Decorators** (Advanced Topic)
//* Used in Angular, NestJS, etc., for annotating classes & methods
//! 8. **Type Guards** -> Runtime pe type check karna
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
//* Parameter Properties-
//* Getter & Setter-
var Users = /** @class */ (function () {
    function Users(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(Users.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (someValue) {
            this._name = someValue;
        },
        enumerable: false,
        configurable: true
    });
    return Users;
}());
var S1 = new Users("tejassss", 21);
console.log(S1.name);
S1.name = "tejass patell";
console.log(S1.name);
//* Static Values-
var Anything = /** @class */ (function () {
    function Anything() {
    }
    Anything.getNumber = function () {
        return Math.random();
    };
    Anything.namee = "TejasPateL";
    return Anything;
}());
console.log(Anything.namee);
console.log(Anything.getNumber());
//* Abstract Classes-
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    return Payment;
}());
// class phonePay extends Payment{
//     constructor(public sendername : string) { }
// }
//* Functions-
//* types-
//* Optional & default parameters-
function Student(name, age, gender) {
    console.log(name, age, gender);
}
Student("PateL", 22, "male");
Student("gaurav", 23);
function Student2(name, age, gender) {
    if (gender === void 0) { gender = "I am not want to disclosed"; }
    console.log(name, age, gender);
}
//* Rest parameters-
//? Rest / Spred-
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
    console.log(arr[6]);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
var arr2 = [1, 2, 3, 4, 5];
var arr6 = __spreadArray(__spreadArray([], arr2, true), [9, 80], false);
console.log(arr6);
//* Function Overloading
//? Generics-
function logger(arg) {
    console.log(arg);
}
logger("Batmannnn");
logger(true);
logger(20);
//* Generics interface-
//* Generics classes-
var Generics = /** @class */ (function () {
    function Generics(key) {
        this.key = key;
    }
    return Generics;
}());
var G1 = new Generics("hello this is generic");
var G2 = new Generics(4 + 5);
console.log(G1);
console.log(G2);
// ! Important-
function ABZ(a, b) {
    return "hi";
}
function ABB(a, b) {
    return a;
}
function ABC(a, b) {
    return "hi";
}
function AAA(a, b) {
    return "hi";
}
ABZ("Hello", "How are you");
//* Modules-
var payment_1 = require("./payment");
(0, payment_1.payment)(89);
//* Type Assertion- 
var t = 12;
t.toLocaleUpperCase;
t.toLocaleLowerCase;
var r = Number("45");
console.log(r);
//* Types Gaurds-
// typeof, instanceof
