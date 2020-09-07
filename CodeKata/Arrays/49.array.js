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
    
    let flag=0,c=0;
    for(let i=1;i<n;i++){
        if(c%2===0 && arr[i-1]>=arr[i]){
            flag=1;
            break;
        }else if(c%2===1 && arr[i-1]<=arr[i]){
            flag=1;
            break;
        }
        c++;
    }
    if(flag===1)
        console.log("no");
    else
        console.log("yes");
});