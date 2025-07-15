//for of

// ["","",""]
// [{},{},{}]


const  arr=[1,22,3,10,5,6];
for(const i of arr){
   // console.log(i);
    
}

// const st="hello sonu";
// for (const i of st) {
//     console.log(i);
    
//  }


//MAPS
//it contain unique value

const map=new Map();
map.set('in',"india")
map.set('fr',"france")
map.set('US',"united state")
map.set('in',"india")

console.log(map);
for (const [i,j ] of map) {
    console.log(i,"===>",j);
    
}

// const m={
//     s:"moon",
//     o:"loot",
//     n:"test"
// }
// for (const [i,j] of m) {
//     console.log(i,j);
    
// }