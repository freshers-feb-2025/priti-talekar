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

    return a+b;
  }

console.log(add(10,20));
console.log(add(10,20,30));