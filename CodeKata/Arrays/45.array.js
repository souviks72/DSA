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
    let arr = userInput[1].split(' ').map(a => +a);
    
    if(n%2===1)
        n--;
    for(let i=0;i<n;i+=2){
        let t = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = t;
    }
    console.log(arr.join(' '));
});