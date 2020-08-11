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
    
    let obj = {}
    for(let i=0;i<n;i++){
        if(arr[i] in obj){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }    
    
    let ans = [];
    let v = Object.values(obj);
    let min = Math.min.apply(this,v);
    for(let i in obj){
        if(obj[i]===min)
            ans.push(i);
    }
    ans.sort((a,b)=> b-a);
    console.log(ans.join(' '));
});