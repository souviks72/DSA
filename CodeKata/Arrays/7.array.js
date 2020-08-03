/*
You are provided with an array in which all elements are repeated thrice except one which is repeated twice.
Your task is to print that number.

O(n) time and O(1) extra space

Input Description:
First line contains a number denoting size of array ‘n’.Next line contains n space separated numbers

Output Description:
Print the number which is repeated twice

Sample Input :
5
13 12 13 12 13
Sample Output :
12
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

    let n = +userInput[0];
    let arr  =userInput[1].split(' ').map(a => +a);
    
    let uniqueArr = [];
    arr.forEach(a => {
        if(uniqueArr.indexOf(a)===-1)
            uniqueArr.push(a);
    });
    let s = uniqueArr.reduce((next,acc)=>{return acc+next},0);
    s = s*3;
    let sum = arr.reduce((next,acc)=>{return acc+next},0);
    console.log(s-sum);

  //end-here
});