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
    
    let max = 0,sum=arr[0],c=1;
    for(let i=1;i<n;i++){
        sum += arr[i];
        c++;
        if(c==2){
            max = Math.max(max,sum);
            c=1;
            sum = arr[i];
        }
    }
    console.log(max);
});