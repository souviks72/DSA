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
    let arr = userInput[1].split(' ').join('');
    
    if(arr.indexOf(k)===-1)
        console.log("no");
    else{
        let count = 0;
        for(let i=0;i<n;i++){
            let c = arr.charAt(i);
            if(c==k)
                count++;
        }
        console.log("yes",count);
    }
});