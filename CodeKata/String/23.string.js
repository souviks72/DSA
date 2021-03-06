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
        let x = s[i];
        if(i%2===0){
            t = t + x.toUpperCase()+" ";
        }else{
            t = t + x.toLowerCase()+" ";
        }
    }
    console.log(t.trim());
});