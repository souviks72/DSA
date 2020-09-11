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
    
    let obj = {};
    for(let i=0;i<n;i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }
    let keys = Object.keys(obj);
    let val = Object.values(obj);
    let min = Math.min.apply(this,val);
    let x = val.indexOf(min);
    console.log(keys[x]);
});