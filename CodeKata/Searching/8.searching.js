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
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let n = +userInput[0];
    let arr = userInput[1].split(' ').map(a => +a);
    let obj = {};
    for(let i=0;i<n;i++){
        if(arr[i] in obj){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }
    let c=0;
    for(var i in obj){
        if(obj[i]===3)
            c++;
    }
    
    console.log(c);
  //end-here
});