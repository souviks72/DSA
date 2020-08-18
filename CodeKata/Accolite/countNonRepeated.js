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
    
    let count =0,ans=[];
    for(let i=0;i<n;i++){
        let x = arr[i];
        if(arr.indexOf(x)===arr.lastIndexOf(x)){
            count++;
            ans.push(x);
        }
    }
    if(count===n)
        console.log(0);
    else
        console.log(ans.join(' '))
});