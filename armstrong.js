let n =154;
let temp=n;
let sum=0;
let digits=n.toString().length;

while(n>0){
    let r =n%10;
    sum += r**digits;
    n=Math.floor(n/10);
}

if(sum===temp){
    console.log("is a arstrong number");
}else{
    console.log("is not a armstrong number");
}