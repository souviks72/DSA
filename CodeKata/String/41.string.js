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
    let ans = [];
    for(let j=0;j<arr.length;j++){
        let s = arr[j];
        let t = "";
        for(let i=0;i<s.length;i++){
            let ch = s.charAt(i);
            let n = s.charCodeAt(i);
            if(n>=97){
                n = 65 + (n-97);
            }else if(n<90){
                n = 97 + (n-65);
            }
            t += String.fromCharCode(n);
        }
        ans.push(t);
    }
    
    console.log(ans.join(' '));
});