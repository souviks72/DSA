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
    let [s,t] = userInput[0].split(' ');
    
    let n = s.length,m=t.length;
    let x;
    if(n>m){
        s = s.substring(0,m);
    }else if(m>n){
        t = t.substring(0,n);
    }
    x = s+t;
    console.log(x)
});