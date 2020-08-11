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
    let T = +userInput[0];
    let ans = [];
    let j = 1;
    for(let t=0;t<T;t++){
        let n = +userInput[j++];
        let arr = userInput[j++].split(' ').map(a => +a);
        arr.sort((a,b)=> a-b);
        for(let i=0;i<arr.length;i++){
            ans.push(arr[i]);
        }
    }
    console.log(ans.join(' '))
});