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
    let t = "";
    for(let i=0;i<s.length;i++){
        if(i%2===0){
            t += util(s[i]) +" ";
        }else{
            t += s[i] + " ";
        }
    }
    console.log(t.trim());
});

function util(x){
    x = x.split('').reverse().join('');
    return x;
}