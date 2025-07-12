//forin loop

const  myob={
    js:"javaScript",
    cpp:"c++",
    rb:"rubi",
    py:"python"
}
// for (const key in myob) {
// console.log(myob[key],"valur=",myob[key]);
// }

// const prog=["java","rubi","python","javascript"]
// for (const key in prog) {
//    console.log(prog[key]);
   
// }


const map=new Map();
map.set('in',"india")
map.set('fr',"france")
map.set('US',"united state")
map.set('in',"india")
for (const key in map) {
console.log(key);
}