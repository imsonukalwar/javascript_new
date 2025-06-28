//arrays

//.In java script array size is resisable
// it is emutable and it can store similar or non similar type of data

const myarray=[1,2,3,4,5,6,60]

myarray.push(44)
// console.log(myarray); 

//other way to initilize array

const newarr=new Array(1,3,4,6,7)
// console.log(newarr);

//array method

// newarr.push(44)
// console.log(newarr);
// newarr.pop()
// console.log(newarr)

newarr.unshift(3)
// console.log(newarr);



// console.log(myarray.includes(4));
// console.log(myarray.indexOf(4));

const newarray=myarray.join()
// console.log(newarray);
// console.log(typeof newarray);

//slice splice


const arr1=new Array(0,1,2,3,4,5,6,7)
arr2=arr1.slice(1,3)//here indexes goes to 2 index
console.log(arr2);
arr3=arr1.splice(1,3)//here indexes goes to 3 index
console.log(arr3);
console.log(arr1);//this is print after value of slice or splice rest value is printed






