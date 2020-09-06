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
    let exp = userInput[0].split(' ');
    let s = 0, n = exp.length;
    let st = [], v = "1234567890";
    for(let i=0;i<n;i++){
        let ch = exp[i];
        if(v.indexOf(ch)>=0){
            st.push(parseInt(ch));
        }else{
            let a = st.pop();
            let b = st.pop();
            if(ch==='+'){
                st.push(b+a);
            }else if(ch==='-'){
                st.push(b-a);
            }else if(ch==='/'){
                st.push(b/a);
            }else{
                st.push(b*a);
            }
        }
    }
    console.log(st.pop());
});