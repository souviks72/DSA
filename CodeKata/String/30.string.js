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
    let s = userInput[0];
    let t="";
    for(let i=0;i<s.length;i++){
        let n = s.charCodeAt(i);
        n = (n+3);
        if(n>90){
            n = (n-90)+64;
        }
        t += String.fromCharCode(n);
    }
    console.log(t);
});