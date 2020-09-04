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
    let n = +userInput[0];
    let i=1,c=0;
    let k = 'aabikl';
    while(i<=n){
        let s=userInput[i++].split('');
        s.sort();
        s = s.join('');
        
        if(s===k)
            c++;
    }
    console.log(c);
});