const mynuber=[1,2,3,4,5,6,7,8,9,10]

// const new1=mynuber.map((num) => num+10)
// const new1=mynuber.map((num) => {
//     return num+10})

//chaning

const new2=mynuber
            .map((num) => num * 10)
            .map((num) => num+1)
            .filter((num2)=>num2>40)
console.log(new2);
