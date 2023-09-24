//  Primatives: numers, strings, booleans
//  Complex Types: arrays, objects
// Function Types, parameters

//  primatives

let age: number = 24;

age = 12;

let userName: string;

userName = "Max";

let isIntstructor: boolean;

isIntstructor = true;

//More Complex Types

let hobbies: string[];

hobbies = ["Sports", "Cooking", "12 here as number, would not work"];

// Unions
// when you want to allow more than one type, you add it like any other type assignment
// Seperate them by Bars

let course: string | number | boolean = "React - The Complete Guide";

course = 12341;
// can also use it for other variables, to  accept more info.
let newUserName: string | string[];

newUserName = "Max";

//Can assign a type to something liek a variable

type Person = { name: string; age: number };

let person: Person;
person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Functions and Types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

updatedArray[0].split("");

// so in this example, because we assigned any to the values, it does not know what to assign to the new array it creates, so we cant use functions that rely on specific types of data

function insertAtBeginningGeneric<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
} //if you hover over this, it will tell you what type it is.
const updatedGenericArray = insertAtBeginningGeneric(demoArray, -1); // [-1,1,2,3]

class Student {
  firstName: string;
  lastName: string;
  age: number;
  courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }
  enroll(courseName: string) {
    this.courses.push(courseName);
  }
}

const student = new Student("Max", "Schwarz", 32, ["Angular]"]);
student.enroll("React");

console.log(student.courses);

//Can make them private by adding private infront of name such as
//  private courses: string[];
//Can also short hand notation

class shorthandStudent {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}
  enroll(courseName: string) {
    this.courses.push(courseName);
  }
}

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("Hello");
  }
}
