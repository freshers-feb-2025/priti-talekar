// function display(){
//     var i=1;
//     setTimeout(()=>{
//          console.log("hello "+i);
//     },3000)
// }

// display();


function show(){
      for(var i=0;i<5;i++){
            setTimeout(()=>{
                console.log(i);
            },1000);
      }
}

show();