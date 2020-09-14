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
    let obj={};
    s.sort();
    for(let i=0;i<s.length;i++){
        let ch = s[i];
        if(obj.hasOwnProperty(ch)){
            obj[ch]++;
        }else{
            obj[ch]=1;
        }
    }
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let ans = [];
    for(let i=0;i<keys.length;i++){
        ans.push([values[i],keys[i]]);
    }
    ans.sort((a,b)=> b[0] - a[0]);
    let t="";
    for(let i=0;i<ans.length;i++){
        let j=ans[i][0];
        let ch = ans[i][1];
        while(j-->0)
            t+=ch;
    }
    console.log(t);
});