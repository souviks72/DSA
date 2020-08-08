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
    let ans = [];
    ans.push(arr[n-1]);
    
    for(let i=n-2;i>=0;i--){
      if(arr[i]>ans[0]){
          ans.unshift(arr[i]);
          
      }
        
    }
    console.log(ans.join(' '));

  //end-here
});