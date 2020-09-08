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
    let t = "";
    for(let i=0;i<s.length;i++){
        let x = s.substring(i,i+1);
        if(s.indexOf(x)!==s.lastIndexOf(x)){
            t += x.toUpperCase() 
        }else{
            t += x;
        }
    }
    console.log(t);
});