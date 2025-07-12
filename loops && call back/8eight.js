//reduced method

const myvalue=[1,2,3]


// const mytotal=myvalue.reduce(function (acc,currval){
//     console.log("accumalatoe=",acc);
// console.log(currval);
//     return acc+currval
// },0)

const  mytotal=myvalue.reduce((acc,curr)=>acc+curr,0)
//console.log(mytotal);



const shoapcard=[
    {itemname:'js course',
        prise:444
    },
       {itemname:'python',
        prise:1200
    },
       {itemname:'java',
        prise:5000
    },   {itemname:'rubi',
        prise:1000
    },
]
const total=shoapcard.reduce((acc,item)=>acc+item.prise,0)
console.log(total);
