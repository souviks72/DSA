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
    let exp = userInput[0].split('');
    let flag=0,st=[];
    let obj = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    for(let i=0;i<exp.length;i++){
        if(exp[i]==='(' || exp[i]==='{' || exp[i]==='[')
            st.push(exp[i]);
        else{
            let ch = exp[i];
            let top = st[st.length-1];
            let a = obj[ch];
            if(a!==top){
                flag=1;
                break;
            }else{
                st.pop();
            }
        }
    }
    if(flag===1 || st.length > 0)
        console.log("no");
    else
        console.log("yes");
});