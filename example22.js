//static

class Employee{
  constructor(role){
    this.role=role;
  }
  static hello(instance){
    console.log(`hello world!`);
  //   // console.log(`${this.role}`); // wrong way to access the instance varaiable
  //   console.log(`${instance.role}`); // by passing the instance as a parameter it then can access the instance varaible
  }
  // another way to access the instance varaible 
  static getRole(e){
    return e.role;
  }

  }

const e=new Employee("backend developer");
// Employee.hello(e);
Employee.hello();
console.log(Employee.getRole(e)); 

