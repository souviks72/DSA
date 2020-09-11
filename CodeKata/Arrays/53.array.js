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
    let [s,k] = userInput[0].split(' ');
    k = parseInt(k);
    let ans = [],n=s.length;
    for(let i=0;i<n;i++){
        if((i+1)%k===0)
            ans.push(s.charAt(i));
    }
    console.log(ans.join(' '));
});