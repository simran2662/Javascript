// set is a collection and it contains the unique values

let nums=new Set();
nums.add('2');
nums.add('2');
nums.add('8');
nums.add('9');

// nums.forEach( function(number){
//   console.log(number);
// });

//  or

nums.forEach( value =>{
  console.log(value)
}
);

// has will return true or false

console.log(nums.has("simran"));