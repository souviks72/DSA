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
    let ans = [],i=0,j=arr.length-1;
    while(i<j){
        ans.push(arr[j--]);
        ans.push(arr[i++]);
    }
    if(i===j)
        ans.push(arr[i]);
    console.log(ans.join(' '));
});