const user=new Object()//this is non-singleton object
const user1={}//this is singletone object


 user1.name="sonu"
 user1.id="123ad"

//console.log(user1);


const reguser={
    emai:"sonukumar@gmail.com",
    fullname:{
userfullmane:{
    firstname:"sanu",
    lastname:"kalwar"
}
    }
}
//console.log(Object.keys(reguser));
//console.log(Object.values(reguser));
//thre are lots of property to apply on object you go t read mdn 

//console.log(reguser.fullname.userfullmane.firstname);


//let's combine the object
//note {...xyz,...xyz1.}:--spared operator which spared xyz to xyz1 

const obj={1:"a",2:"b"}
const obj1={3:"a",4:"b"}
//const obj3={obj,obj1}; ///not execute in propriate way
const obj3=Object.assign(obj,obj1)
 console.log(obj3);





