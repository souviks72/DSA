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
    let [n,k] = userInput[0].split(' ').map(a => +a);
    let arr = userInput[1].split(' ').map(a => +a);
    
    let l=0, r = n-1,flag=0;
    while(l<=r){
        let mid = l + (r-l)/2;
        if(arr[mid]===k){
            flag=1;
            break;
        }else if(arr[mid]<k){
            l = mid+1;
        }else{
            r=mid-1;
        }
    }
    if(flag===1)
        console.log("yes");
    else
        console.log("no");
});