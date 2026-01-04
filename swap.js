let a =10;
let b=20;

let temp =a;
a=b;
b=temp;

console.log(a,b);

//without using temp varaible
let x =20;
let y =30;
 x =x+y;
 y=x-y;
 x=x-y;

 console.log(x,y);

 //Factorial
 let n=5;
 let fact =1;
 for(let i=1; i<=n; i++){
    fact *=i;
 }
 console.log(fact);

 

