const btn=document.querySelectorAll("button");
// btn.onclick=function(){
//     console.log("clicked");
//     alert("don't touhch")
// }
// other way to write same logic
// function nor(){
//     alert("hello")
// }
// btn.onclick=nor;


//event proprety=addeventlistener
for (const btn1 of btn) {
    btn1.addEventListener("click",sayhello);
    btn1.addEventListener("click",sayname);
}
function sayhello(){
    alert("hello")
}
function sayname(){
    alert("sonu")
}


// btn.addEventListener("mouseover", function(){
//     btn.style.backgroundColor="red";
// })
// btn.addEventListener("mouseout", function(){
//     btn.style.backgroundColor="green";
// })