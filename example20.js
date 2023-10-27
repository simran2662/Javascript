//Object prototype it will inherit all the properties and methods from another object
const person = {
  name: "sim",
  age: 22,
  color: "fair",
  greet :function(){
    console.log(`i am ${this.name} and i am ${this.age} year old`);
  },
};

const student = Object.create(person);
student.name = "massu";
student.job = "software engineer";

console.log(student.name);
console.log(this.color);  
