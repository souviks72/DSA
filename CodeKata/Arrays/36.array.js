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
    let years = userInput[1].split(' ').map(a => +a);
    let party = userInput[2].split(' ');
    let elections = []
    for(let i=0;i<n;i++){
        elections.push([years[i],party[i]]);
    }
    
    elections.sort((a,b)=>{
        return a[0] - b[0];
    });
    let ans = [];
    for(let i=1;i<n;i++){
        if(elections[i][1] !== elections[i-1][1]){
            console.log(elections[i][0]);
        }
    }
});