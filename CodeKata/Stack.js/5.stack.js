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
    let arr = userInput[1].split(' ').map(a => +a);
    let k = +userInput[2];
    let q = userInput[3].split(' ').map(a => +a);
    
    let ngr = [], st = [];
    for(let i=0;i<n;i++){
        ngr.push(-1);
    }
    for(let i=n-1;i>=0;i--){
        let a = arr[i];
        
        if(st.length===0){
            ngr[i] === -1;
            st.push(a);
        }else if(st[st.length-1]>a){
            ngr[i] = st[st.length-1];
            st.push(a);
        }else{
            while(st.length>=0 && st[st.length-1] <= a){
                st.pop();
            }
            if(st.length===0){
                ngr[i] === -1;
                st.push(a);
            }else if(st[st.length-1]>a){
                ngr[i] = st[st.length-1];
                st.push(a);
            }
        }
       
    }
    
    let ans = [];
    for(let i=0;i<k;i++){
        ans.push(ngr[q[i]]);
    }
    console.log(ans.join(' '));
});