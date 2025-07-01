// let a=2
// const b=4
// var c =5
// console.log(a);
// console.log(b);
// console.log(c);


{}//this is called scope 
//example of scope

// global scope/
var c =30

if(true){
let a=2
const b=4
var c =5
}
console.log(a);//l1
console.log(b);//l2
//here l1 and l2 line is not execute becuse 'a' and 'b' value is undefined beacuse variabe 'a
//and 'b' is declare inside scope block means if block that's why l1 and l2 is not execute 
console.log(c);
