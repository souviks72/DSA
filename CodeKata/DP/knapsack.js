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
    let [n,W] = userInput[0].split(' ').map(a => +a);
    let weight = userInput[1].split(' ').map(a => +a);
    let price = userInput[2].split(' ').map(a => +a);
    
    let t = [];
    for(let i=0;i<=n;i++){
        let arr = [];
        for(let j=0;j<=W;j++){
            arr.push(0);
        }
        t.push(arr);
    }
    for(let i=1;i<=n;i++){
        for(let j=1;j<=W;j++){
            if(weight[i-1]<=j){
                t[i][j] = Math.max(t[i-1][j],t[i-1][j-weight[i-1]]+price[i-1]);
            }else{
                t[i][j] = Math.max(t[i-1][j],t[i][j-1]);
            }
        }
    }
    console.log(t[n][W]);
});