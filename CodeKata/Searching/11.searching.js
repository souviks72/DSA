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
    let [m,n] = userInput[0].split(' ').map(a => +a);
    let max = -1,p=-1;
    for(let i=0;i<m;i++){
        let arr = userInput[i+1].split(' ').map(a => +a);
        let c = arr.reduce((acc,next)=>{return acc+next},0);
        if(c>max){
            max = c;
            p = i;
        }
    }
    console.log(`${p}:${max}`);
});