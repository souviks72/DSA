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
    let  T = +userInput[0];
    for(let x =0;x<T;x++){
        let n = +userInput[1];
        let arr = userInput[x+2].split(' ').map(a => +a);
        let c = 1;
        let max = arr[n-1];
        for(let i=n-2;i>=0;i--){
            if(arr[i]>max){
                c++;
                max = arr[i];
            }
                
        }
        console.log(c);
    }
});