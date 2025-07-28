


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

saveToDB("sonu kumar")
 .then(()=>{
    console.log("data1 save :promise is resolve");

    return saveToDB("hello world")}).then(()=>{
        console.log("data2 saved");

        //you also check why your data is saved or not
        //then(ans) arguement ans print 
        //same things happen with catch(ans) print ans
        return saveToDB("manoj")}).then(()=>{
        console.log("data3 saved"); })


.catch(()=>{
    console.log("promise was resected");
    
})