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
    let s = userInput[0].split(' ');
    let ans=[];
    for(let i=0;i<s.length;i++){
        
        if(s[i]!== ' ' && s[i].length!==0)
            ans.push(s[i]);
    }
    let x = ans.join(' ').trim();
    
    console.log(x);
});