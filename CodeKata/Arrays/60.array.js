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
    let arr = userInput[1].split(' ').map(a =>+a);
    
    let i=0,max=-1;
    while(i<n){
        let j=i+1,c=0;
        while(j<n && arr[j-1]<arr[j]){
            j++;c++;
        }
        if(c>0){
            max = Math.max(max,c+1);
            i=j;
        }else{
            i++;
        }
    }
    
    console.log(max);
});