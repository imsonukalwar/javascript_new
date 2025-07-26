let h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="green";
// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);



//wrap in a function
// function change(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }

// change("red",1000);
// change("green",2000);



//nesting call
function change(color,delay,nextchange){
    setTimeout(() => {
        h1.style.color=color;
        nextchange();
    }, delay);
}

change("red",1000,()=>{
change("green",2000,()=>{
});
});
//this is nested call that is to lazy that's why it's called callback hell;