const btn=document.querySelector("button");
btn.onclick=function(){
    console.log("clicked");
    
}
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor="red";
})
btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor="green";
})