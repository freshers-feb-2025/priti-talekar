//function declaration
function addition(num1,num2){
    return num1+num2;
}

//function calling
let sum=addition(10,20);
console.log("Sum: "+sum);


//arguments object 
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  }

console.log(add(10,20));
console.log(add(10,20,30));

let array=[1,2,3,4];
//anonymous functions and its immediate invokation
(function(){
   console.log("ANONYMOUS Function "+array[0]);
})(array);

//anonymous function as parameter
setTimeout(function(){
       console.log("Call me after 1 sec");
},1000);


//Arrow function:shorthand for anonymous function
let print=(array)=>{
  let i=0;
  while(i<array.length){
    console.log(array[i]+" ");
    i++;
  }
}

print(array);
