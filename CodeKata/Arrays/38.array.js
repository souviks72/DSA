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
    
    let brr = "", e=0,odd=0;
    for(let i=0;i<n;i++){
        let x = arr[i];
        if(x%2===0){
            brr+="0";
            e+=1;
        }else{
            brr+="1";
            odd++;
        }
    }
    if(e===1){
        console.log(arr[brr.indexOf("0")]);
    }else if(odd===1){
        console.log(arr[brr.indexOf("1")]);
    }else{
        console.log(-1);
    }
});