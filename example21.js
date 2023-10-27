// call() function

const person={
  name:"priya",
  age:"23",
  color:"dusky",
  greet: function(){
    return this.name+" "+this.color;
  }
}
  const student={
    name:"saniya",
    age:"11",
    color:"fair"
  }

  console.log(person.greet.call(student)); //saniya fair