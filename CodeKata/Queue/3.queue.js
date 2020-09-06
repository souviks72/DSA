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
    let x = util(exp);
    if(x===false){
        console.log(-1);
    }else{
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
    }   
    
});

function util(exp){
    let nums=0,op=0;
    let v = "1234567890";
    for(let i=0;i<exp.length;i++){
        if(v.indexOf(exp[i])===-1)
            op++;
        else
            nums++;
    }
    if(op>=nums)
        return false;
    return true;
}