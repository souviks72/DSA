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
    let [m,n] = userInput[0].split(' ').map(a=>+a);
    let ar1 = userInput[1].split(' ').map(a=>+a);
    let ar2 = userInput[2].split(' ').map(a=>+a);
    
    let flag=0;
    ar2.forEach(a =>{
        if(ar1.indexOf(a)===-1){
            flag=1;
        }
    })
    if(flag===1){
        console.log('no');
    }else{
        console.log('yes');
    }
});