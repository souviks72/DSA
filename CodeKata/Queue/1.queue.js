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
    let c=0,st=[];
    for(let i=0;i<exp.length;i++){
        let ch = exp[i];
        if(ch==='('){
            st.push(ch);
        }else if(ch===')'){
            if(st.length>0){
                let x = st[st.length-1];
                if(x==='('){
                    st.pop();
                    c++;
                }
            }
        }
    }
    if(c>0)
        console.log(c*2);
    else
        console.log(-1);
});