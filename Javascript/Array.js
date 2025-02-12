//array Initialization

let array=[1,2,4,3,'user'];

//array traversing  by using for loop
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//basic array operations 
//1)push();add element at end
array.push('compueter');

//2)pop();remove element from end
array.pop();

//4)unshift; add element at front
array.unshift(20);

//3)shift() ;remove element from front
array.shift();

function add(a, b) {
    return a + b;
}

// let sum = add;

// function average(a, b, fn) {
//     return fn(a, b) / 2;
// }

// let result = average(10, 20, sum);

// console.log(result);