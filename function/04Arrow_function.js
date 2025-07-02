const user={
    username:"hitesh",
    prise:"555",
    wellmassage:function(){
        console.log(`${this.username} ,welcome to our website`);
        // console.log(this); this this keyword state the current status of the object
        
        
    }

};
// user.wellmassage()//there this keyword state the current status
// user.username="sam";
// user.wellmassage()

console.log(this);//it will return the empty


// function one(){
//     let username="sonu"
//     console.log(this.username);//output is undefined because this keyword is work with object not a fuction 
//     //we will descuss more information regarding this keyword in futher video    
// }

// one()


// const chai=()=>{//it will make a arrow function we are jusr delet function  and replace with arrow with same content make a arrow funtion
//     let username="sonu"
//     console.log(this.username);
    
// }
// chai()


//let's discuss the bassic syntax of arrow function
//() => {}//this is bassik syntax of arrow function

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,6));


//const addtwo=(num1,num2)=> num1+num2 //this statement called implicite return 
//we will write likr this way
//console.log(addtwo(2,6));


const addtwo=(num1,num2)=>  (num1+num2)

//now we will try to return in object


const addtwo1=(num1,num2)=>  ({username:"sonu"})
console.log(addtwo1(2,6));