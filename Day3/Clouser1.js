function p(){
    var x=100;
    function q(){
        console.log(x);
    }
      x=300;
      return q;
}
let r=p();
r();
console.log("hello");

function k(){                                       
    var x=100;
    function p(){
        q();
        function q(){
            console.log(x);
        }
    }
    return p;
}

let result=k();
result();

