const score=400
console.log(score);


//this is stricly check value is in number form then print it
const balance=new Number(300)
console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//300.0


const othernumber=39.0098
console.log(othernumber.toPrecision(3));//39.0

const hun=100000
//console.log(hun.toLocaleString('en-IN'));//when we use like of syntax it give us value in saperation part


///+++++++++++++++++++++/////////////++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.43));
// console.log(Math.ceil(-4));
// console.log(Math.floor(-4))
// console.log(Math.min(-4,4,7,2,4));
// console.log(Math.max(4,6,1,2,8,9));


console.log(Math.floor(Math.random()*10+1));


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));


//how take input in js
const user =prompt("take input","name");
