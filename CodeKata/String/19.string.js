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
    let arr = userInput[0].split('');
    
    let s = arr.join('');
    
    let ans = arr.filter((x,i)=>{
        return s.indexOf(x) !== s.lastIndexOf(x);
    })
    ans = [...new Set(ans)];
    if(ans.length===0)
        console.log(-1);
    else
        console.log(ans.join(' '))
});