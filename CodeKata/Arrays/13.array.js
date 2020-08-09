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
    
    let freq = {};
    for(let i=0;i<n;i++){
        if(arr[i] in freq){
            freq[arr[i]]++;
        }else{
            freq[arr[i]] = 1;
        }
    }
    
    let val = Object.values(freq);
    let keys = Object.keys(freq);
    
    for(let i=0;i<val.length;i++){
        for(let j=0;j<val.length-1-i;j++){
            if(val[j]>val[j+1]){
                let t = val[j];
                val[j] = val[j+1];
                val[j+1] = t;
                
                t = keys[j];
                keys[j] = keys[j+1];
                keys[j+1] = t;
            }
        }
    }
    
    keys.sort((a,b)=>{
        if(freq[a]===freq[b])
            return a-b;
    })
    
    console.log(keys.join(' '));
});