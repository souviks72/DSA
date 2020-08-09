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
    let n = userInput[0];
    let arr = userInput[1].split(' ').map(a => +a);
    let max = -1;
    
    let i = 1;
    let sum = arr[0];
    max = sum;
    while(i<n){
        while(arr[i]>arr[i-1]){
            sum+=arr[i];
            i++;
            max = Math.max(max,sum);
        }
        max = Math.max(sum,max);
        sum = arr[i];
        i++;
    }
    console.log(max);
});