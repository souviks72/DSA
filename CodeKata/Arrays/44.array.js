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
    
    let c=0;
    while(n!==0){
        let d = n%2;
        if(d===1)
            c++;
        n=Math.floor(n/2);
    }
    console.log(c);
});