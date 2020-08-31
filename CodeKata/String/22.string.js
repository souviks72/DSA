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
    let v = 'aeiouAEIOU';
    let t = "";
    for(let i=0;i<s.length;i++){
        let x = s.charAt(i);
        if(v.indexOf(x)===-1)
            t+=x;
    }
    if(t.length===0)
        console.log(-1);
    else{
        let a = t.split('').reverse().join('');
        console.log(a);
    }
});