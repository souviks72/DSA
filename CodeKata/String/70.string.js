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
    let c=0;
    for(let i=0;i<s.length;i++){
        let x = s.charAt(i);
        let y = t.charAt(i);
        if(x!==y)
            c++;
        if(c>1){
            flag=1;
            break;
        }
    }
    if(c===1)
        console.log("yes");
    else
        console.log("no");
});