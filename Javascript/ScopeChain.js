// {
//     let x=10;
//      var y=20;
// }
// console.log(x);  //output: x is not defined
// console.log(y);   //output:20


function a(){
    let p=20;
    //console.log(k);        //not defined
    c();
    function c(){
       // var k=10;
          console.log(p);
          console.log(b);
    }
}
var b=10;
a();