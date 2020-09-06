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
    let s = userInput[0].split(' ');
    if(s.length===0){
        console.log(-1);
    }else{
        let n = s.length,i=0;
        let t = util(s);
        while(t.length !== s.length){
            t = s;
            s = util(t);
        }
        console.log(s.join(' '))
    }
});

function util(s){
    
    let t=[];
    for(let i=1;i<=s.length;i++){
        if(s[i]!==s[i-1]){
            t.push(s[i-1]);
        }else{
            i++;
        }
    }
    return t;
}