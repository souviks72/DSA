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
    let n  = +userInput[0];
    let arr = userInput[1].split(' ').map(a => +a);
    
    let i=0,j=0;
    let sum = 0,min=0;
    while(i<n && j<n){
        sum += arr[i];
        if(sum<min){
            min = sum;
        }
        if(sum>0){
            sum = 0;
        }
        i++;
    }
    console.log(min);
});