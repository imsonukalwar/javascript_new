

const coding=["js","java","python","rubi"]


// coding.forEach((item)=>{
//     console.log(item);
    
// })

// const value=coding.forEach((item)=>{
//     // console.log(item);
//     return item//it means never be return give undefined
// })

// console.log(value);



// const mynum=[1,2,3,4,5,6,7]
// const val2=mynum.filter((num)=>num>4)
// console.log(val2);



// const mynum=[1,2,3,4,5,6,7]
// const val2=mynum.filter((num)=>{
//     return num>4//why return ...becouse scope is avalable in this code if scop is not than there is no need return type like above we take one example
// })
// console.log(val2);

// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=[];
// mynum.forEach((Num) => {
//     if(num > 4){
//         newnum.push(num)
//     }
// }) 

// console.log(newnum);

const books=[
     {title:'book one',
     genre:'function',
     published:1981,
     edition:2004
     },
     {title:'book two',
     genre:'non-function',
     published:1992,
     edition:2008
     },
          {title:'book three',
     genre:'history',
     published:1999,
     edition:2007
     },
          {title:'book four',
     genre:'non-function',
     published:1989,
     edition:2010
     },
          {title:'book five',
     genre:'science',
     published:2009,
     edition:2014
     },
          {title:'book six',
     genre:'function',
     published:1987,
     edition:2010
     },
          {title:'book seven',
     genre:'history',
     published:1986,
     edition:1996
     },
          {title:'book eight',
     genre:'science',
     published:2011,
     edition:2016
     },
          {title:'book nine',
     genre:'function',
     published:1981,
     edition:1989
     }
]

//let userbooks=books.filter((bk)=>bk.genre==='history')
userbooks=books.filter((bk)=> { 
    return bk.published>= 1995 && bk.genre==='history'
})//why return becouse using scope
console.log(userbooks);
