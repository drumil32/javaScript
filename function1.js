// this is known as function statement
function sayHi(name){
  console.log( "hello " +name);
}

// this is also known as function expression
// this is also known as annonymous function
let add = function(a,b){
    return a+b;
}

  // IIFE => IMMDIATE IVOKE FUCNTION EXPRESSION
let subtractionAnswer = (function(a,b){
    return b-a;
})(5,7);
console.log(add(6,8));
console.log(subtractionAnswer);
