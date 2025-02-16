let getpromise=()=>{
    return new Promise((resolve,reject)=>{
    console.log("i am a promise");
    // resolve("success");
    reject("network error");
})};

let promise=getpromise();
promise.then((result)=>{
    console.log("promise is fullfilled",result);
});
promise.catch((error)=>{
      console.log("promise is rejected ",error );
});