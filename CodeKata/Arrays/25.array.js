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
    
    let max_ending_here = 0, max_so_far = -99999;
    let i=0;
    while(i<n){
        max_ending_here += arr[i];
        if(max_so_far<max_ending_here){
            max_so_far = max_ending_here;
        }
        i++;
    }
    console.log(max_so_far);
});