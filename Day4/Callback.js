//example1:
function fun1(callback){
   let result=callback(5);
    return result;
}

function fun2(num){
     return num*num
}

let final=fun1(fun2);
console.log(final);


//example2:

function show(multiply){
       let array=[1,2,3,4];
      return multiply(array);;
}

function multiply(array){
     return array.map((ele)=> ele*ele);
}

const updated=show(multiply);
console.log(updated);