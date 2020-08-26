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
    let s = userInput[0];
    
    let i=0,j=0,t="";
    while(i<s.length && j<s.length){
        j=i+1;
        let c=0;
        while(j<s.length && s.charAt(j) === s.charAt(i)){
            j++;
            c++;
        }
        if(j<s.length && c>0){
            // t = s.substring(0,i) + s.substring(j);
            i=j;
        }else{
            t+=s.charAt(i);
            i++;
        }
    }
    console.log(t);
});