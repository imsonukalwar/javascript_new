//asynk function

async function greet() {
    // throw "some random error"
    return "hello";
}
greet().throw((result)=>{
    console.log("hii sonu");
    console.log("result:",result);
    
});
greet().catch((ans)=>{
console.log("hii2 sonu2");
console.log("result:",ans);

})

let demo=async()=>{
return 5;
}