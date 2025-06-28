//singleton :-- a abject which is created by the help of constructor that is callled singletone object


//object literals....|
// //Object.create  this is callled constructor method

const mysymbol=Symbol("soonu")//this thing use in key
const user ={
    name:"sonu",
    "full name":"sonu kalwar",
    [mysymbol]:"sonu",
    age:19,
    location:"hydrabad",
    email:"sonu@gmail.com",
    isloggedin:true,
    lastlogged:["monday","dunday"]
}

// console.log(user.email); //acces email by (.) poerator
// console.log(user["email"]);//other method 

// //console.log(user.full name);//this give error thats why e=we use 
// console.log(user["full name"]);
// console.log(user.lastlogged);

// console.log(user.mysymbol);
// console.log(typeof user.mysymbol);
// //but here is some correction this mysymbol data type is String but we want symbol data type
// //so we will do this 
// console.log(user["mysymbol"]);
// console.log(typeof user["mysymbol"]);

//you can also overwride this
//like this
user.email="sonukalwar@gmail.com"
//console.log(user.email);
//console.log(user);//print all user content



user.greeting=function(){//    here function use as a variable
    console.log(" sonu kalwar sir");
    
}
console.log(user.greeting());

user.greeting1=function(){
    console.log(`hello js user ${this.name}`);//here this keyword reference of user
    
}
// console.log(user.greeting1());

