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
    
    let ans = [];
    let min = 999999
    for(let i=0;i<arr.length;i++){
        let x = arr[i];
        for(let j=0;j<arr.length;j++){
            let y = arr[j];
            if(arr.indexOf(x)===arr.indexOf(y))
                continue;
            else{
                s = x + y;
                s = Math.abs(s-0)
                if(s<min){
                    ans=[];
                    ans.push(x);
                    ans.push(y);
                    min = s;
                }
            }
        }
    }
    console.log(ans.join(' '));
    
});