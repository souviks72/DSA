// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let n = +userInput[0];
    if(isPrime(n))
        console.log("no");
    else
        console.log("yes");
});

function isPrime(n){
    let c=0;
    for(let i=2;i<n;i++){
        if(n%i===0)
            return false;
    }
    return true;
}