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
    console.log("This is : ", obj.name, "email is : ", obj.email);
}

find({ name: "tejas", age: 22, email: "abc2@gmail.com", gender: "male" });

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

    Carspeed() {
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



