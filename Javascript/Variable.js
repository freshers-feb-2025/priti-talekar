//1)let:reassignment is allowed, not reinitialization
let num=10;
num=20;

//2)const:Reassignment and reinitialization are not allowed
const number=30;

//3)var: Reassignment and reinitialization are  allowed
var value=20;
value=40;   //reassignment
var value=50;  //reinitialization


// function show(){
//     let a=20;
//     var b=30;
// }
// console.log(a);     //not accessible
// console.log(b);     //not accessible


const a=20;
function fun(){
     console.log("hello" +a);
}
 let result=fun();      
 console.log(result) //output:undefined




