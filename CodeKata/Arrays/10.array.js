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
    
    let ar2 = [];
    for(let i=0;i<n;i++){
        if(i%2===0){
            ar2.push(arr[i]);
        }
    }
    ar2.sort((a,b)=> a-b);
    let j=0;
    for(let i=0;i<n;i++){
        if(i%2===0){
            arr[i] = ar2[j++];
        }
    }
    console.log(arr.join(' '));
});