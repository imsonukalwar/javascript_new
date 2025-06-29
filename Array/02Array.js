const marble_heros=["thor","tonystark","hulk"]
const dc_heros=["superman","flash","batman"]
// marble_heros.push(dc_heros)
// console.log(marble_heros);//here dc_heros data take as array input but we want to print dc heros add marble heros data 
//let's do 

//here we try to use concatination 

const new_heros=marble_heros.concat(dc_heros)
// console.log(new_heros);


//now we use other method to concate

const all_heros=[...marble_heros,...dc_heros]///this method is widly used by user
//console.log(all_heros);

const another_array=[1,2,3[4,5,6],7,[6,7[4,6]]]
// const real_arr=another_array.flat(Infinity);
// //  console.log(real_arr);


// console.log(Array.isArray("sonu"));
// console.log(Array.from("sonu"));//this method creat sonu in array form

console.log(Array.from({name:"sonu"}));//interesting case because here is not clear that you can creat key part to array or value part to array


let s1=100
let s2=200
let s3=300
// console.log(Array.of(s1,s2,s3));//this is creat in array from s1 s2 and s3

