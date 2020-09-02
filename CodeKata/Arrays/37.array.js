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
    let arr = userInput[1].split(' ').map(a => +a);
    let brr = userInput[2].split(' ').map(a => +a);
    arr.sort((a,b)=> a-b);
    brr.sort((a,b)=> a-b);
    let ans = [];
    let i=0,j=0,k=0;
    while(i<m && j<n){
        if(arr[i]<brr[j]){
            ans[k] = arr[i++];
        }else{
            ans[k] = brr[j++];
        }
        k++;
    }
    while(i<m){
        ans[k++] = arr[i++];
    }
    while(j<n){
        ans[k++] = brr[j++];
    }
    console.log(ans.join(' '));
});