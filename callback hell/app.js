
//this all about of code is asynchronous code

function saveToDB(data,sucsess,failure){
    let internateSpeed=Math.floor(Math.random()*10)+1;
    if(internateSpeed>4){
        sucsess();
    }else{
        failure();
    }
}
saveToDB("sonu kalwar",()=>{
    console.log("Sucsess: your data was saved");
    saveToDB("hello world",()=>{
        console.log("sucsess2:data 2 was saved ");
        saveToDB("sonu",
            ()=>{
        console.log("sucsess3:data3 saved");
    },()=>{
        console.log("failure2:weak connection");
        
    });
    },()=>{
        console.log("failure 2 :weak connection");
        
    });
    saveToDB("hello word",()=>{
        console.log("sucsess2:data 2 saved");
    });
});