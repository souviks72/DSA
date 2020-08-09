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
    let t = util(s,"");
    while(true){
        if(s.length===t.length)
            break;
        else{
            s = t;
            t = util(t,"");
        }
    }
    console.log(t);
});

let util = (s,t)=>{
    let l = s.length;
    let i=0;
    while(i<l){
        let ch = s.charAt(i);
        let j = i+1;
        while(j<l && s.charAt(j)===ch)
            j++;
        if(j===i+1){
            t+=ch;
            i++;
        }else{
            i=j;
        }
    }
    return t;
}