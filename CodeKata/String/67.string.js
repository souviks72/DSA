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
    let s  =userInput[0].split('');
    let t="",n=s.length,i=0;
    while(i<n){
        let x = s[i];
        let j=i+1,c=0;
        while(j<n && s[j]===x){
            j++;c++;
        }
        t+=`${x}${c+1}`;
        i=j;
    }
    console.log(t);
});