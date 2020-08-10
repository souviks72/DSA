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
    let stack = [];
    stack.push(s.charAt(0));
    let i = 1;
    let match = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    let flag=0;
    while(i<s.length){
        if(s.charAt(i)=='[' || s.charAt(i)=='{' || s.charAt(i)=='('){
            stack.push(s.charAt(i));
        }else{
            while(stack[stack.length-1]!==match[s.charAt(i)])
                stack.pop();
            
            if(stack.length===0){
                flag=1;
                break;
            }else if(stack[stack.length-1]===match[s.charAt(i)])
                stack.pop();
        }
        i++;
    }
    if(flag===0 && stack.length===0)
        console.log("yes");
    else
        console.log("no");
});