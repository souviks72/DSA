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
    let max1=-1,max2=-2;
    for(let i=0;i<n;i++){
        if(arr[i]>max1){
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i]>max2){
            max2 = arr[i];
        }
    }
    console.log(max2);
});