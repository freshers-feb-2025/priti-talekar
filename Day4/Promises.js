let promise=new Promise((resolve,reject)=>{
    let a=10+10;
    if(a==20){
        resolve("success");
    }else{
        reject("failed");
    }
})

promise.then((message)=>{
    console.log("this in then "+message);
}).catch((message)=>{
    console.log("this is in catch "+message);
})
