const student=[
   {
    id:101,
    name:"rushikesh",
   },
   { 
      id:102,
      name:"shraddha",
   },
   {
      id:103,
      name:"priti",
   }
]
//map function:
const result=student.map((ele)=>{
    return ele.id+" "+ele.name;
})

//for each :
result.forEach((item)=>{
   console.log(item);
});

//filter:

const filter=student.filter((element)=>{
      return element.name.length<6;
})

console.log(filter);

//reduce:

const numArray=[2,4,5,3,6];
let sum=numArray.reduce((previous,current)=>{
       return previous+current;
});

console.log(sum);
