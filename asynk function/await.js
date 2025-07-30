//await function

// function getnum(){
//     console.log(5);
// }

// async function demo(params) {
//     getnum();
// }

// function getnum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//         },1000);
//     });
// }

// async function demo(params) {//await function alway written under the asynk function 
//     await getnum();//this aawait keyword print random num first then take sonu time to print some other numbr
//     await getnum();
//     getnum();
// }

function getnum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
        if(num>3){
        console.log(num);
        resolve();}
    else{
        console.log("function is rejected");
        
        reject();}
        },1000);
    });
}

// async function demo(params) {
//     await getnum();
//     await getnum();
//     await getnum();
//     let m=9;//this all line not work while function is rejected 
//     console.log(m);
//     console.log(m+5);
// }
//if you want to execute next line after the rejection we use (try and catch method)

async function demo(params) {
   try {await getnum();
    await getnum();
    await getnum();
}catch(er){
    console.log("er caugth");
    console.log(er);
}
    let m=9;
    console.log(m);
    console.log(m+5);
}