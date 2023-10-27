// created a simple class and then created an object of that class 

class Person{
  constructor(){
    this.firstName="";
    this.lastName="";
  }
setFirstName(firstName){
  this.firstName=firstName;
}

getFirstName(){
  return this.firstName;
}

setLastName(lastName){
   this.lastName=lastName;
}
getLastName() {
  return this.lastName;
}
}
let p = new Person();
p.setFirstName("Simran");
p.setLastName("Khan");

console.log(p.getFirstName()); // Outputs: "Simran"
console.log(p.getLastName());  // Outputs: "Khan"

console.log(`Hello, ${p.getFirstName()} ${p.getLastName()}!`);