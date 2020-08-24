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
    
    let i=0,j=0,max=0;
    while(i<n){
        let x = arr[i];
        let c=0,j=i+1;
        while(j<n && arr[j]===x){
            j++;
            c++;
        }
        if(c>0){
            c++;
            max = Math.max(max,c);
            i=j;
        }else{
            i++;
        }
    }
    if(max===0)
        console.log(-1);
    else
        console.log(max);
});