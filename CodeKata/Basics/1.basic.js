const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let [m,n] = userInput[0].split(' ').map(a => +a);
    let c=0;
    for(let i=m;i<=n;i++){
        if(isPrime(i))
        c++;
    }
    console.log(c);
});

function isPrime(n){
    let c=0;
    for(let i=2;i<n;i++){
        if(n%i===0)
            return false;
    }
    return true;
}