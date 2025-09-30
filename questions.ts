let age: number = 21;
let Username: string = "Tejas";
let loggedIN: boolean = true;
console.log("Hi", Username, "age", age, "is leggedIN", loggedIN);

//* any vs unknown
// any: disables type checking (unsafe).
let x: any = "hello";
x.toUpperCase();
console.log(x.toUpperCase());

// unknown: safer alternative; must check type before use.
let y: unknown = "this is unknown data type";
if (typeof y === "string") {
    // y.toUpperCase();
    console.log(y.toUpperCase());
    console.log(y);
}
else console.log(y);

//* Union type-

let id: number | string | boolean;
id = 124;
console.log(id);
id = "this is union type example";
console.log(id);
id = true;
console.log(id);

function getuniontype(input: string | number) {
    if (typeof input === "string") {
        console.log("This is String", input.toUpperCase());
    } else if (typeof input === "number") {
        console.log("This is number in union type", input.toFixed(1));
    }
}

getuniontype("hello union");
getuniontype(14.5242);

//*--------------------------------------

//* Type aliases-
type CustomDataType = string | number;
let customID: CustomDataType = 188;
console.log(customID);

//* Interfaces IN TS -> Shape of object define karne ke liye
interface User {
    id: number;
    name: string;
}
const user: User = { id: 1, name: "Tejas" };
console.log(user);

interface USER {
    name: string,
    age: number,
    email: string,
    gender?: string,  // optional
}

//* extend
interface Collage extends USER {
    COLLAGE: string;
}

function find(obj: USER) {
    console.log("This is : ", obj.name, "email is : ", obj.email, "gender is : ", obj.gender);
}

const user1: Collage = {
    name: "xyz",
    age: 21,
    email: "xyz@gmail.com",
    gender: "male",
    COLLAGE: "none"
}

// find({ name: "tejas", age: 22, email: "abc2@gmail.com", gender: "male" });
find(user1);

//* null & undefined types
let c: null;
let w: null = null;
console.log(w)
let zy: string | null;
zy = "king";
console.log(zy)
zy = null;
console.log(zy)
// y = 10; // ❌ Error

let zx: undefined;
console.log(zx)

//* void - it is used for function that does not return a value only console.
function logMessage(msg: string): void {
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


function defaultpara(name: string = "Tejas_Patel") {
    console.log(name);
}

defaultpara();

//* INTERFACE vs Abstract CLASS-
// | Feature              | **Interface**                           | **Abstract Class**                           |
// | -------------------- | --------------------------------------- | -------------------------------------------- |
// | Implementation       | Only method/property declarations       | Can have both abstract & concrete methods    |
// | Multiple inheritance | ✅ A class can implement many interfaces | ❌ A class can extend only one abstract class |
// | Access modifiers      | ❌ Not allowed                           | ✅ Allowed (`public`, `private`, `protected`) |
// | Fields/Properties    | Only declarations (no initialization)   | Can have fields with default values          |
// | Usage                | Describes a contract/shape              | Defines base class with shared logic         |
//* Interface ka kaam hota hai batana: "ye class ke paas ye properties/methods hone chahiye."

interface Car {
    name: string;
    price: number;
    speed: string;
}

class Compamy implements Car {
    name: string;
    price: number;
    speed: string;

    //* Note- inside class always use this keyword
    constructor(name: string, price: number, speed: string) {
        this.name = name;
        this.price = price;
        this.speed = speed;
    }

    Carspeed(): any {
        console.log(this.name, "Speed is: ", this.speed);
    }
}

const Cars = new Compamy("BMW", 5000000, "200km/h");
Cars.Carspeed();

//* Abstract class-
abstract class Students {
    // constructor(public StudentName: string) {
    //     this.StudentName = StudentName;
    // }

    public StudentName: string;       // accessible everywhere
    private StudentID: number;        // accessible only inside Students
    protected Age: number;            // accessible in Students + child classes

    constructor(StudentName: string, StudentID: number, Age: number) {
        this.StudentName = StudentName;
        this.StudentID = StudentID;
        this.Age = Age;
    }

    abstract ExamMarks(): void;  //* Abstract method ka matlab: ye method har child class me implement karna compulsory hai Parent class me implementation nahi hai → sirf contract/blueprint hai

    Calculate() {
        console.log("This is student name ", this.StudentName, this.StudentID, this.Age);
    }
}

class Learning extends Students {     //* Ek class ko dusri class se inherit karne ke liye use hota hai extends.
    StudentBranch: string;
    Marks: number;

    constructor(StudentName: string,StudentID: number, Age:number, StudentBranch: string, Marks: number) {
        super(StudentName, StudentID, Age);    //* parent constructor call
        this.StudentBranch = StudentBranch;
        this.Marks = Marks;
    }
    ExamMarks(): void {
        console.log(`${this.StudentName} got ${this.Marks} marks in branch ${this.StudentBranch}`);
        // console.log(this.StudentID); // ❌ Error: private
        console.log(this.Age);          // ✅ protected accessible in child
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
function generics<T>(value : T) : T{
    return value;
}

console.log(generics<string>("hello generics"));
console.log(generics<number>(25));

//* utility-
interface Student {
  name: string;
  age: number;
}

const s1: Partial<Student> = {
  name: "Tejas" // age optional ho gaya
};

const s2: Required<Student> = {
  name: "Tejas",
  age: 21  // ab ye dena compulsory hai if optional then also
};

console.log(s1.name, s2.age, s2.name);

const s3: Readonly<Student> = { name: "Tejas", age: 21 };
// s3.age = 22; // ❌ Error: cannot assign to 'age'

interface Students {
  name: string;
  age: number;
  email: string;
}

const s4: Pick<Students, "name" | "email"> = {                //* pick some properies
  name: "Tejas",
  email: "tejas@example.com"
};

console.log(s4.email);
// console.log(s4.age);  not accessable

//* Type assertion-  Type assertion ka matlab hai → tum compiler ko forcefully bata rahe ho ki “Trust me, mujhe pata hai ye value kis type ki hai”. Ye basically TypeScript ko hint deta hai ki ek value ko kis type ke tarah treat karna hai.

let value: any = "Hello TypeScript";
let strLength: number = (value as string).length;
console.log(strLength);


//* readonly with object - Jab tum kisi object property ko readonly karte ho → wo reassign/update nahi kiya ja sakta. Sirf read kiya ja sakta hai.

interface Studentt {
  readonly id: number;
  name: string;
}

const s11: Studentt = { id: 101, name: "Tejas" };

s11.name = "Patel";   // ✅ allowed
// s11.id = 202;         // ❌ Error: Cannot assign to 'id' because it is a read-only property

//* readonly with Array - Agar array readonly declare kiya → tum uske elements ko replace nahi kar sakte, push/pop nahi kar sakte. Lekin tum read (access) kar sakte ho.

// const arr: number[] = [1,2,3,4,5];
const arr: readonly number[] = [1,2,3,4,5];
// console.log(arr.push(8)); 
console.log(arr);

//* type vs interface-
type Studenttt = {
  name: string;
  age: number;
};

type College = Studenttt & { collegeName: string };

const s22: College = {
  name: "Tejas",
  age: 21,
  collegeName: "XYZ University"
};

console.log(s22);

//* Generic interface- used for reusability
interface drink<T> {
    price: T
    brand: T
}

const newDrink: drink<String | number> = {brand : "Coca Cola", price : 20};
console.log(newDrink);

//* aync/await-  (Async function ka return hamesha Promise hota hai.)
async function fetchData(): Promise<string> {
  return "data";
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
const typedArrowFunc = (org_name: string, desc: string): string => {
    let company: string = `Organization: ${org_name}, Description: ${desc}`;
    return company;
}
console.log(typedArrowFunc("GeeksforGeeks", "A Computer Science Portal"));
// Prints:

//* enums- enum ka matlab hota hai → set of named constants.
//* Matlab agar tumhare pass limited fixed values hain jo repeat hone wali hain, unko hardcode karne ke bajaye tum enum bana sakte ho.
//* Ye tumhare code ko clean aur maintainable banata hai.

enum direction{
    north, //0
    south, //1
    east,  //2
    west  //3
}

let move: direction = direction.east;
console.log(move);
//! By default numbers assign hote hain 0 se start hoke.

enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let currentRole: Roles = Roles.Admin;
console.log(currentRole); // 👉 "ADMIN"
//! Jab tumhe human-readable value chahiye (jaise database me ya API me bhejne ke liye), tab string enums use karte hain.

