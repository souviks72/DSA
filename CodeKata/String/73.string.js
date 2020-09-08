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
    
    let arr = userInput[0].split(' ');
    let n = arr.length;
    let ans = [], obj={};
    for(let i=0;i<n;i++){
        let x = arr[i];
        let y = arr[i].split('').sort().join('');
        if(obj[y]){
            obj[y].push(x);
        }else{
            obj[y] = [x];
            
        }
    }
    ans = Object.values(obj);
    if(ans.length===n)
        console.log(0);
    else{
        let se = '';
        for(let i=0;i<ans.length;i++){
            se += `[${ans[i]}],`
        }
        console.log(ans.length)
       // console.log(se.substring(0,se.length-1))
    }
});