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
    let x = "";
    for(let i=0;i<s.length;i++){
        let a = s.charAt(i);
        if(t.indexOf(a)===-1)
            x+=a;
    }
    if(x.length===0)
        console.log(-1);
    else
        console.log(x);
});