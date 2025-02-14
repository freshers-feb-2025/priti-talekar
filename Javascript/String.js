//String 
let str="Computer";

//str traversal
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}


//template literals:
let firstname="john";
let message=`Hi, I'm ${firstname}`;

console.log(message);


let array=[2,3,4,5];
array.map((i,e)=>{
     console.log(e);
})