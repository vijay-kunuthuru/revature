function isprime(n) {
    if(n<=1) return false;

    for(let i=2; i<Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}
console.log(isprime(10));

for(let n=2;n<=50;n++){
    if(isprime(n)){
        console.log(n);
    }
}