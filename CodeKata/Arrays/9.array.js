/*
You are given with an circular array .Your task is calculate the difference between two consecutive number. 
And if difference is greater than ‘k’, print 1 else print 0

Input Description:
You are given two numbers ‘n’, ’m’. Next line contains n space separated integers.

Output Description:
Print 1 if the difference is greater than ‘m’.

Sample Input :
5 15
50 65 85 98 35
Sample Output :
0 1 0 1 0
*/
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

    let [n,k] = userInput[0].split(' ').map(a => +a);
    let arr = userInput[1].split(' ').map(a => +a);
    
    let ar = [];
    for(let i=0;i<n-1;i++){
        let diff = Math.abs(arr[i]-arr[i+1]);
        if(diff>k)
            ar.push(1);
        else
            ar.push(0);
    }
    let diff = Math.abs(arr[0]-arr[n-1]);
    let x = diff>15? 1:0;
    ar.push(x);
    console.log(ar.join(' '));
  //end-here
});