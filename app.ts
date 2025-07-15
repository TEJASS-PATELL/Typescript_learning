//*  What is TypeScript?
// TypeScript ek superset hai JavaScript ka – iska matlab hai ki TypeScript mein JavaScript ka har code chalega, lekin TypeScript mein extra features bhi milte hain — jaise Type Safety, Interfaces, Classes, Access Modifiers, etc.

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
let arr = [1, 2, 3, 4, "Hello"];
//* Mixed array (number + string) -> TypeScript ise (number | string)[] maane ga.
//* Interview Point: Always define type explicitly for better code readability and error checking.

// let arr5: number[] = [1, 2, 3, 4, "Hello"];
//* ❌ Error: string "Hello" allowed nahi hai kyunki array ka type number[] hai.

let arr1 = [1, 2, 3, 4, { name: "Tejas" }, { age: 22 }];
//* Array with number and object types. Iska inferred type: (number | {name: string} | {age: number})[].

// [], {}, () => Reference types (Array, Object, Function)
//? Yeh reference types heap memory me store hote hain, aur variables me unka reference (address) hota hai, actual data nahi.

//*-------------------------------------
//* Tuples -> Fixed length & fixed type array
let arr3: [number, string, boolean] = [10, "hello", false];
//* Interview Tip: Tuple ka use tab karo jab tumhe exact fixed order chahiye ho types ka.

//*-------------------------------------
//* Enums -> Set of named constants
enum UserRole {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

enum StatusCode {
    ABONDON = "code 500",
    NOTFOUND = "code 404",
}

UserRole.ADMIN;
//* Interview Point: Enums strongly typed constants ke liye use hote hain (Role-based access control, status codes).

//*-------------------------------------
//* Primitive Types
let d: number;
d = 25;
// d = "hello";  //❌ Error

let v: string;
v = "learn";
// v = 45; //❌ Error

let f;  // *Implicit type: any
f = 99;
f = "system";
f.toUpperCase();  // ✅ Because latest value is string

let q: unknown;
q = 45;
q = "anyone";

// q.toUpperCase(); // ❌ Error: unknown ko pehle type check karna padta hai
if (typeof q === "string") {
    q.toLocaleLowerCase();  // ✅ Safe
}

//* unknown type -> safer alternative of 'any'. Use karo jab exact type pata nahi ho.

//*-------------------------------------
//* null & undefined types
let c: null;
let w: null = null;

let y: string | null;
y = "king";
y = null;
// y = 10; // ❌ Error

let x: undefined;

//*-------------------------------------
//* Never -> Function jo kabhi return nahi karta (infinite loop, error throw)
function abcd(): never {
    // while (true) { }  // Infinite loop
    // throw new Error("Never returns");
}

//* Interview Point: never ka use edge cases me hota hai - error handling, exhaustive checks.

//*-------------------------------------
//* Interfaces -> Shape of object define karne ke liye
interface USER {
    name: string,
    age: number,
    email: string,
    gender?: string,  // optional
}

function find(obj: USER) { }

find({ name: "tejas", age: 22, email: "abc2@gmail.com", gender: "male" });

//* Interview Tip: Interface vs Type - Interview me pucha jaata hai. Interface prefer karo for object structure, extend karna easy hota hai.

//*-------------------------------------
//* Interface Extend karna (inheritance jaisa)
interface Student {
    name: string,
    age: number,
    email: string,
    gender?: string,
}

interface Collage extends Student {
    Collage_name: string
}

function findStudent(object: Collage) {
    console.log(object.Collage_name);
}

//* Interview Note: Interfaces merge ho sakti hain. Same name hone par automatic merge hoti hai.

//*-------------------------------------
//* Type Aliases
type sankhya = number;
let xyz: sankhya;
xyz = 90;

type value = number | null | string | boolean;
let system: value;
system = 1.45;
system = "hello";
system = false;
system = null;

//* Interview Tip: Type alias ka use readability aur reusability badhane ke liye hota hai.

type arg = number | string;
function abcde(obj: arg) { }
abcde(40);

//*-------------------------------------
//* Classes & Objects

class Device {
    name = "lg";
    price = 12000;
    category = "Digital";
}

let d1 = new Device();
let d2 = new Device();

//* Interview Note: TypeScript classes me default values set kar sakte ho directly.

//* Constructor with parameter properties
class Bottle {
    constructor(public name: string, public price: number) { }
}

let ob1 = new Bottle("Maths", 800);
console.log(ob1);

//* Interview Tip: public/private likhne se constructor ke andar hi properties ban jaati hain.

//* Parameterized class with default values
class Music {
    constructor(
        public name: string,
        public writter: string,
        public thumbnail: string = "thumbnail.jpg",
        public length: number
    ) {
        this.thumbnail = "thumbnail.png";  // override default value
    }
}

let ob2 = new Music("Tera Ghata", "Gajendra Verma", "", 2000);
console.log(ob2);

//*-------------------------------------
//* this keyword: current object ko refer karta hai. Important in OOPs context

//* Access Modifiers -> public, private, protected

class User {
    constructor(public readonly name: string) { }

    changename() {      //* Methods
        // this.name = "hello"; // ❌ readonly property change nahi hoti
    }
}

let s1 = new User("Tejas");
s1.changename();
console.log(s1);

//* readonly -> ek bar set hone ke baad change nahi ho sakta.
//* Interview Tip: OOPs ke principles jaise encapsulation, abstraction jaroor revise karo.

//*-------------------------------------
//* MISSING & IMPORTANT TOPICS FOR INTERVIEWS:
//* 🔴 These are also frequently asked in interviews at Google, Microsoft, Amazon, etc.


//! 1. **Generics** => type-safe reusable code banane ke liye (functions, classes, interfaces me use hota hai)
//! Example:
function identity<T>(arg: T): T {
    return arg;
}
identity<number>(5);
identity<string>("hello");

//! 2. **Type Assertion** => Developer ko pata hai ki value ka type kya hai
let someValue: unknown = "I am string";
let strLength = (someValue as string).length;

//! 3. **Union vs Intersection Types**
type A = { name: string };
type B = { age: number };
type C = A & B; // Intersection
let obj: C = { name: "X", age: 30 };

//! 4. **Type Inference** => TypeScript khud se type detect karta hai
let num = 5;  // inferred as number

//! 5. **Readonly & Optional Properties in Interfaces**
interface Demo {
    readonly id: number;
    name?: string;
}

//! 6. **Difference: Interface vs Type**
// - Interface extend kar sakta hai aur merge ho sakta hai
// - Type zyada flexible hai, tuples, unions, intersection support karta hai

//! 7. **Decorators** (Advanced Topic)
//* Used in Angular, NestJS, etc., for annotating classes & methods

//! 8. **Type Guards** -> Runtime pe type check karna
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}

//! 9. **Mapped Types, Conditional Types** (Advanced for library code)

//! 10. **Utility Types** - Partial, Required, Pick, Omit
type Person = { name: string; age: number; gender: string };
type PartialPerson = Partial<Person>;  // sab optional ho jayenge

//* Parameter Properties-


//* Getter & Setter-

class Users{
    constructor(public _name:string, public age:number){ }

    get name(){
        return this._name;
    }

    set name(someValue){
        this._name = someValue;
    }
}

let S1 = new Users("tejassss", 21);
console.log(S1.name);
S1.name = "tejass patell";
console.log(S1.name);

//* Static Values-

class Anything{
    static namee:string = "TejasPateL";

    static getNumber(){
        return Math.random();
    }
}

console.log(Anything.namee);
console.log(Anything.getNumber());

//* Abstract Classes-

class Payment{
    constructor(protected amount:number, protected date: number){ }

}

// class phonePay extends Payment{
//     constructor(public sendername : string) { }
// }

//* Functions-


//* types-


//* Optional & default parameters-
function Student(name : string, age: number, gender?: string){ 
    console.log(name, age, gender);
}
Student("PateL", 22, "male");
Student("gaurav", 23);

function Student2(name : string, age: number, gender: string = "I am not want to disclosed"){ 
    console.log(name, age, gender);
}

//* Rest parameters-
//? Rest / Spred-

function sum(...arr : number[]){
    console.log(arr);
    console.log(arr[6]);
}

sum(1,2,3,4,5,6,7,8,9);

let arr2 = [1,2,3,4,5];
let arr6 = [...arr2, 9,80];

console.log(arr6);


//* Function Overloading





//? Generics-

function logger<T>(arg: T){ 
    console.log(arg);
}

logger<string>("Batmannnn");
logger(true);
logger<number>(20);


//* Generics interface-




//* Generics classes-

class Generics<T>{
    constructor(public key: T){

    }
}

let G1 = new Generics("hello this is generic");
let G2 = new Generics<number>(4 + 5);
console.log(G1);
console.log(G2);


// ! Important-
function ABZ<T>(a : T, b : T): string {
    return "hi";
}

function ABB<T>(a : T, b : T): T {
    return a;
}

function ABC<T>(a : T, b : T): T {
    return <T>"hi";
}

function AAA<T>(a : T, b : T): T {
    return "hi" as T;
}

ABZ<string>("Hello", "How are you");


//* Modules-
import { payment } from "./payment";
payment(89);

//* Type Assertion- 
let t: any = 12;
(t as string).toLocaleUpperCase;
(<string>t).toLocaleLowerCase;


let r = Number("45");
console.log(r);

//* Types Gaurds-
// typeof, instanceof





















