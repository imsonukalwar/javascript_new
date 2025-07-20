let btn=document.querySelector("button");
let inp=document.querySelector("input");
let list=document.querySelector("ul")

btn.addEventListener("click",function(){
let li=document.createElement("li");
li.innerText=inp.value;

let delbtn=document.createElement("button");
 delbtn.innerText="delete";
delbtn.classList.add("delete");

li.appendChild(delbtn);
list.appendChild(li);
inp.value="";
});

// let dbtns=document.querySelectorAll(".delete");
// for (const debtn of dbtns) {
//     debtn.addEventListener("click",function(){
//         let par=debtn.parentElement;
//         console.log(par);
//         par.remove();//this only work on exist li (list) who list crete a new that is never delete
//     })
// }

//Event delegation (this method apply to delete your newr list let's try it)


list.addEventListener("click",function(event){
        console.log(event.target.nodeName);
        if(event.target.nodeName == "BUTTON"){
            let listitem=event.target.parentElement;
            listitem.remove();
            console.log("deleted");
            
        }
});

