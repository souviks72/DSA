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
    let n = userInput[0];
    let arr = userInput[1].split(' ').map(a => +a);
    
    let ans = [], st = [];
    for(let i = n-1;i>=0;i--){
        let x = arr[i];
        
        if(st.length===0)
            ans[i] = -1;
        else if(st[st.length-1]>=x){
            while(st.length>=0 && st[st.length-1]>=x)
                st.pop();
            if(st.length===0)
                ans[i] = -1;
            else
                ans[i] = st[st.length-1];
            
        }else if(st[st.length-1]<x)
            ans[i] = st[st.length-1];
        
        st.push(x);
    }
    console.log(ans.join(' '));
});