let url="https://catfact.ninja/fact";//if you type wrong link then 
//automatic caugth by method and print wrong 404 error
// fetch(url)
// .then((res)=>{
// console.log(res);
// res.json().then((data)=>{
//     console.log(data);
    
// })


// })
// .catch((err)=>{
//     console.log(err);
    
// });

//make code more copaniniant

fetch(url)
.then((res)=>{
console.log(res);
return res.json();
})
.then((data)=>{
    console.log(data);//here we print the data
    return fetch(url);
})
.then((data2)=>{
    console.log("data1",data2.fact);
    return res.json();
})
.then((data1)=>{
    console.log(data1);
 })
.catch((err)=>{
    console.log(err);
    
});
//api call asyncronous
console.log("i am happy");
