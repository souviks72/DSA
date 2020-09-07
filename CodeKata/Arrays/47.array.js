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
    arr.sort((a,b)=> a-b);
    let sum=0,max = 9999;
    for(let i=0;i<n;i++){
        let x = arr[i];
        if(sum + x<max){
            sum = sum +x;
            max = sum;
        }
    }
    console.log(max)
});