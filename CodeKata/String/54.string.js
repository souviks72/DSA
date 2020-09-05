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
    
    let c=1;
    let flag=0,ans=[];
    while(c<=n){
        ans.push(userInput[c++]);
    }
    
    for(let i=1;i<n;i++){
        c=0;
        let j=i;
        while(j<n && ans[j]===ans[j-1]){
            
            j++;
            c++;
        }    
        
        if(c===k-1){
            
            flag=1;
            break;
        }
    }
    
    if(flag===1)
        console.log("yes");
    else
        console.log("no");
});