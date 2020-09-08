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
    let s = userInput[0].split('');
    let st=[];
    for(let i=0;i<s.length;i++){
        let x = s[i];
        if(x==='(')
            st.push(x);
        else{
            if(st.length ===0 || st[st.length-1]===')')
                break;
            else if(st[st.length-1]==='(')
                st.pop();
            else
                break;
                
        }
    }
    if(st.length>0)
        console.log("no");
    else
        console.log("yes");
});