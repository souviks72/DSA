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
    
    let ans = [];
    let i=0,j=0,c=0;
    while(i<n){
        if(arr[i]===0 && i+1<n){
            j=i+1;
            
            while(j<n && arr[j]!==0){
                j++;
            }
            
            if(j<n){
                i++;
                while(i<j ){
                    ans.push(arr[i++]);
                }
                i--;
            }
        }
        i++;
    }
    if(ans.length===0)
        console.log(-1);
    else
        console.log(ans.join(' '));
});