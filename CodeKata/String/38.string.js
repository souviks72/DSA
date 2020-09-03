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
    let c=0,flag=0;
    let v = "aeiouAEIOU";
    while(c<n){
        let t = userInput[c+1];
        c++;
        let fl = 0;
        for(let i=0;i<t.length;i++){
            let ch = t.charAt(i);
            if(v.indexOf(ch)>=0)
                fl=1;
        }
        if(fl===0)
            flag=1;
    }
    if(flag===1)
        console.log("no");
    else
        console.log("yes");
});