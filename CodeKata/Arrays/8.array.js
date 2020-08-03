//get array minimum without sorting or usinga ny function
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
    
    let min = 9999;
    arr.forEach(a=>{
      if(a<min)
        min = a;
    });
    console.log(min);
  //end-here
});