// function chai(){
//     console.log("dirrect connection");
    
// }
// chai()
// if we invoke this function immidiately what should we do let's see
//we will take same example

(function chai(){//with function named
    console.log("dirrect connection");
    
})();

// ()();  ==>//this is the symtax of imidiatly invoke function expression
//this syntax is used  to remove the polution{like poluted variable} of global scope
//you must user ; this symbol to stop invokin the function if you not write ; this symbol you will not execute futher function


(()=>{console.log("directed connected to the chai");//it will make a arrow function
})();//without function named


((name)=>{
    console.log(`direct connection ${name}`);
    
})("sonu")// with arguement 