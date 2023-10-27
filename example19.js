// Inheritance

class Student{
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
  }

  dancer(){
    console.log(`i am a danncer`);
  }
}
  class People extends Student{

    singing(){
      console.log(`i am a singer ${this.firstName} ${this.lastName}`);
    }
  }

  const p=new People("simran","khan");
   p.singing();
   

