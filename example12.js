// Here's a basic example of how to define a class in JavaScript:

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

const student = new Student("Simran", 22);
student.greet();


