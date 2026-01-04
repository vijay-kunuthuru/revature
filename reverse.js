let n=12321;
let rev=0;
let temp=n;

while(n>0){
    let r =n%10;
    rev=rev*10 +r;
    n=Math.floor(n/10);
}
console.log(rev);

if(rev===temp){
    console.log(" is a palindrome");
}else{
    console.log(" is not a palindrome");
}