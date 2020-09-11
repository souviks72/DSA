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
    let i=0,j=0,c=0,max=-1;
    while(i<n){
        j = i+1;
        c=0;
        while(j<n && arr[j] - arr[j-1]===1){
            j++;c++;
        }
        if(c>0){
            max = Math.max(c+1,max);
            i=j-1;
        }else{
            i++;
        }
        
    }
    console.log(max);
});