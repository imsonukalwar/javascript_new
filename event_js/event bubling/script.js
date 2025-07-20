let div=document.querySelector("div")
let ul=document.querySelector("ul")
let li=document.querySelector("li")
// div.addEventListener("click",function(){
//     console.log("click div");
    
// })
// ul.addEventListener("click",function(){
//     console.log("click lu");
    
// })
// li.addEventListener("click",function(){
//     console.log("click list");
    
// })
//here some correction is while we click on ul or li we get in console all command
//this error called bubble event
//here nessted event is happend

//now how to stop this


//we will event.stopPropagation() => method


div.addEventListener("click",function(event){
    console.log("click div");
    event.stopPropagation();
})
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("click lu");
    
})
li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("click list");
    
})