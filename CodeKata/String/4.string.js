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
    let articles = ['a','an','the'];
    let t = s.toLowerCase();
    let ans = [];
    t=t.split(' ')
    s = s.split(' ')
    for(let i=1;i<s.length;i++){
        if(articles.indexOf(t[i-1])!==-1){
            ans.push(s[i]);
        }
    }
    if(ans.length===0)
        console.log(-1);
    else
        console.log(ans.join(' '));
});