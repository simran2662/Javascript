// let companies=[
//   {name:"google",start:987,end:9865},
//   {name:"kite",start:9876,end:1234}
// ];
// companies.forEach(function(comp){
//   console.log(comp);
// });


// print age greater than 18

const age=[20,1,3,5,70];
const adults= age.filter( function (age) {
  return age>18;
});

 adults.forEach( function (age){
  console.log(  `the ages are :${adults}`);
 }
  );