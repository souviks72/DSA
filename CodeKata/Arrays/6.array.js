/*Find the first 0 in window of size k. You  are given n numbers and window size ‘w’

Your task is to print the first index which has 0

Input Description:
You are given two numbers ‘n’ and ‘w’ n representing size of array and ‘w’ size of window

Output Description:
Print the index of first 0(1 basedindexing),if there is no index with 0 print -1

Sample Input :
7 2
1 0 6 7 4 0 9
Sample Output :
2 2 -1 -1 6 6
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

    let [n,w] = userInput[0].split(' ').map(a => +a);
    let ar2 = userInput[1].split(' ').map(a => +a);
    let arr = [];
    let p=0,start=0,end=w-1;
    
    for(let i=0;i<n-w+1;i++){
        let a = search(ar2,i,end,p);
        if(a>=0)
            arr.push(a+1);
        else
            arr.push(-1);
        p = a;
        end++;
    }
    console.log(arr.join(' '));
  //end-here
});

function search(arr,start,end,p){
    if(p>=start && p<=end){
        if(arr[p]===0){
            return p;
        }
    }
    for(let i=start;i<=end;i++){
        if(arr[i]===0){
            return i;
        }
    }
    return -1;
}