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
    let s = userInput[0].split('');
    let v="aeiouAEIOU",vt="",t="";
    for(let i=0;i<s.length;i++){
        if(v.indexOf(s[i])>-1)
            vt += s[i];
        else
            t+=s[i];
    }
    console.log(`${vt}${t}`);
});