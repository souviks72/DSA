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
    let st = [];
    let s = 0;
    let nums = "1234567890";
    for(let i=exp.length-1;i>=0;i--){
        let ch = exp[i];
        if(nums.indexOf(ch)>=0){
            st.push(parseInt(ch));
        }else{
            let a = st.pop();
            let b = st.pop();
            if(ch==='+'){
                st.push(a+b);
            }else if(ch==='-'){
                st.push(a-b);
            }else if(ch==='/'){
                st.push(a/b);
            }else{
                st.push(a*b);
            }
        }
    }
    console.log(st.pop());
});