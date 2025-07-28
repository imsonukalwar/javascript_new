


function saveToDB(data){
    return new Promise((sucsess,failure)=>{
        let internateSpeed=Math.floor(Math.random()*10)+1;
    if(internateSpeed>4){
        sucsess("sucsess:data is saved");
    }else{
        failure("fail:data is not saved");
    }
    });
}

// let request=saveToDB("sonu kumar");
// request.then(()=>{
//     console.log("promise is resolve");
// });
// request.catch(()=>{
//     console.log("promise was resected");
    
// })

saveToDB("sonu kumar")
 .then(()=>{
    console.log("promise is resolve");
})
 .catch(()=>{
    console.log("promise was resected");
    
})