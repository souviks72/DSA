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
    
    let t = [];
    let c=1;
    while(c<=n){
        let ar = userInput[c].split(' ').map(a => +a);
        c++;
        t.push(ar);
    }
    c =0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(t[i][j]===1){
                if((i-1===-1 || t[i-1][j]===0)&&(i+1===n||t[i+1][j]===0)){
                    if((j-1===-1||t[i][j-1]===0)&&(j+1===n||t[i][j+1]===0))
                        c++;
                }
            }
        }
    }
    if(c===0)
        console.log(-1);
    else
        console.log(c);
});