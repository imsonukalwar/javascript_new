//function is a block which is perform specific task

// console.log("s");
// console.log("o");
// console.log("n");
// console.log("u");


function myname(){
console.log("s");
console.log("o");
console.log("n");
console.log("u");
}

//myname//this is called reference function this line is not print anything becouse is is just a reference part
//myname()//function excution 


// function addtwonum(num1,num2){//here are we take two parameter
// console.log((num1+num2));
// }
// addtwonum(4,8)//here we pass two arguement
//const result1 =addtwonum(3,5);
 //console.log("answer",result);//console log is not print (8) this is print undefined 
//that's mean console log not return function's value it just print 




function addtwonum(num1,num2){
// let result =num1+num2
// return result
return num1+num2
}
const result =addtwonum(3,5);
//console.log("answer",result)


function userlog(username){
    if(!username){
        console.log("please print user name");
        return
    }
    return `${username} just loged in`
}
 userlog()//this line not print anything because here is not state that you print the function instruction 
//console.log( userlog());

//console.log( userlog("sonu"));
