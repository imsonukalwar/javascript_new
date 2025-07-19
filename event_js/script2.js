let button=document.querySelector("button");
button.addEventListener("click", function(){
    let box1=document.querySelector(".box")
    let text=document.querySelector(".h2");
    let color=generator();
    box1.style .backgroundColor=color;
    text.innerText=color;
});
function generator(){
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
   let color = `rgb(${red},${green},${blue})`; // Correct RGB format
   return color;
}
