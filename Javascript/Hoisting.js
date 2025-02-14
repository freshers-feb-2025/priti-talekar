console.log(result);   //undefined
console.log(number);   //undefined

//console.log(num);      not defined

var number=10;
function display(){
    console.log(num);          //undefined
    var num=30;
     console.log("Hoisting concept");
 } 
 
var result=display();         //output:Hoisting concept
console.log(result);       //undefined    


//arrow function hoisting 
console.log(arrowfun);    //undefined :because it is consider as variable

var arrowfun=()=>{
    console.log("Arrow functions hoisting");
};
arrowfun();    

