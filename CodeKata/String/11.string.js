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
    let t = userInput[0];
    let c = 0,count=0;
    let i=0,j=0;
    while(i<t.length-1){
        while(j< t.length && t.charAt(j)===t.charAt(j+1)){
            j++;
            count++;
        }
            //count++;
        if(j>=3){
            c += Math.floor(count/3);
            count=0;
        }
        i++;
        j=i;
    }
    console.log(c);
});