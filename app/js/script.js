function Evaluate(a, b){
    let c;
    if (a > 0 || !(a < 10)) {
        c = a + b * 3;
    } else { 
        //a==0
        c = a * 2 + b * 4;
    }
        return c;
}

let a = 0;
let b = 2;
let c = 0;



if (a != null){
    console.log("ok was pressed");
a = parseInt(prompt("Input your digit", '0'));
c = Evaluate(a, 1);
} else{
  console.log("cancel was pressed");
}



let d = (a > 0) ? a + b: a * b;
alert(c);
// c++;
// console.log(c);


// for(let i=9; i>1; i--) {
    
//     console.log(i**2);
// }
