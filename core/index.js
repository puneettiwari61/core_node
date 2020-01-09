//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.

var fs = require('fs')
fs.readFile('./theory.md',(err,data) => {
  if (err) console.log(err)
  console.log(data);
})


// 6. Blocking code
//  Run it first and observe the output
  fs.readFile('./theory.md',(err,data)=>{
    if (err) console.log(err);
    console.log(data);
 });
 console.log('run me first');
 
 // change it to run it in non-blocking manner.
 // Observe the difference in blocking and non-blocking code. 



// 10. require math.js
  // console const pie and add and multiply function.

var math = require('./math');

console.log(math.p,math.sum,math.multiply);