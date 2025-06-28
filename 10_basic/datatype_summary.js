//data type 
// primitive 
//  7 type : String , number ,Boolean,null,undefined,Symbol,BigInt


//  js is dynamic type language
// const score =100
// const scorevalue =10.33

// const loggedvalue =false

// const outsidetemp=null

// let user;
const id=Symbol('123')
const otherid= Symbol('13')
console.log(id===otherid);

const bignumber = 334342422254542554245424n
console.log(typeof bignumber);




//  reference (non primitive)

//  Array, Object,function

const heros =["sonu","tanu","tom"];
let obj={
    name:"sonu",
    age:23,
}
function myfun(){
    console.log("sonu");
    
}

console.log(typeof myfun);

