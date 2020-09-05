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
    let [s,t,k] = userInput[0].split(' ');
    k = +k;
    let len1 = s.length,c=0;
    for(let i=0;i<len1;i++){
        if(s.charAt(i)!==t.charAt(i)){
            c++;
        }
    }
    if(c===4 || c===2)
        console.log("yes");
    else
        console.log("no");
});