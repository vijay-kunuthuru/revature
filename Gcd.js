let n=12,m=36;
let gcd=1;
for(let i=1; i<=n && i<=m;i++){
if(n%i===0 && m&i===0){
    gcd=i;
}

}
console.log(gcd);