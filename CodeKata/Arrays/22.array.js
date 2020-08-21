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
    let arr = userInput[1].split(' ');
    let ar = [];
    for(let i=0;i<arr.length-1;i+=2){
        let x = arr[i];
        let y = +arr[i+1];
        let a = [x,y];
        ar.push(a);
    }
    ar.sort((a,b)=> a[1]-b[1]);
    for(let i=0;i<n;i++){
        console.log(ar[i][0]);
    }
});