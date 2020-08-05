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
    let arr = userInput[1].split(' ');
    let c = 0;
    arr.forEach(a => {
        if(a=='P')
            c++;
    });
    let attendance = (c/n)*100;
    if(attendance<=25)
        console.log('Blacklisted');
    else
        console.log('Not Blacklisted');
  //end-here
});