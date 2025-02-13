//var
var a=10;
{
    var a=100;
    console.log(a);   //shadowing
}
console.log(a);     

function fun(){
  var a=200;
  console.log(a);
}

fun();
console.log(a);

//let

let x=200;
{
   let x=300;
    console.log(x);
}
console.log(x);

function show(){
     let x=400;
    console.log(x);
}
show();
console.log(x);


var h=1000;
{
    let h=2000;
    console.log(h);
}

console.log(h);