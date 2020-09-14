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
    let arr = [],c=1;
    while(c<=n){
        arr.push(userInput[c++]);
    }
    
    arr.sort((a,b)=>{
        let v = "aeiouAEIOU";
        let ac=0,bc=0;
        for(let i=0;i<a.length;i++){
            if(v.indexOf(a.charAt(i))!=-1)
                ac++;
        }
        for(let i=0;i<b.length;i++){
            if(v.indexOf(b.charAt(i))!=-1)
                bc++;
        }
        return bc-ac;
    });
    for(let i=0;i<n;i++){
        console.log(arr[i]);
    }
});