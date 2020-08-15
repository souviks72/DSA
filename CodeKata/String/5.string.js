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
    s = s.toLowerCase();
    if(s.length<3){
        console.log(0);
    }else{
        s=s.split('');
        let a = s[0];
        let z = s[s.length-1];
        let mid = Math.floor(s.length/2);
        let m = s[mid];
        if(a==='a' && z==='z' && m==='m')
            console.log(1);
        else
            console.log(0);
    }
});