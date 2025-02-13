// function x(){
//     var a=7;
//     y();
//     function y(){
//          console.log(a);
//     }
// }
// x();

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}

let z=x();
console.log(z);      //output:y function block
z();       //output:7