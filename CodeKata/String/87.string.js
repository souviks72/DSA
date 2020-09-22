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
    let [a,b] = userInput[0].split(' ').map(a => +a);
    let n = a*b;
    let s = util(n);
    let idx=0,c=0;
    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);
        if(ch==1 && c===1){
            idx=i;
            break;
        }else if(ch==1 && c===0)
            c++;
    }
    if(idx===0)
        console.log(0);
    else
    console.log(idx+1);
});

function util(x){
    let ans="";
    while(x!==0){
        if(x%2===0)
            ans = "0"+ans;
        else
            ans = "1" + ans;
        x=Math.floor(x/2);
    }
    return ans;
}