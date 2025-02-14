// function getname(){
//     console.log(namee);
//     var namee="priti";
// }
// getname();
// console.log(namee); 

// console.log("thinkitive");
// setTimeout(()=>{
//   console.log("welcome");
// },0);

// console.log("hello");
const obj=[

    {
        namee:"priti",
    },

    {

        namee:"atharva",
    },

    {
        namee:"code",
    }
];

for(let i=0;i<obj.length;i++){
    console.log(obj[i].namee);
}

let array=obj.filter((e)=>{
       return e.namee.length>3;
});

console.log(array);
