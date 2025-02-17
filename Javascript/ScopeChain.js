// {
//     let x=10;
//      var y=20;
// }
// console.log(x);  //output: x is not defined
// console.log(y);   //output:20


function a(){
    c();
    function c(){
          console.log(b);
    }
}
var b=10;
a();