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
    let n = s.length;
    let i=n-1,j=0;
    let p = " ,.?:;-\\!@#$%^&*()_[]{}/?<>+='";
    while(i>=j){
        let a = s[i];
        let b = s[j];
        
        if(p.indexOf(a)===-1 && p.indexOf(b)===-1){
            let t = a;
            s[i] = b;
            s[j] = t;
            i--;j++;
        }else if(p.indexOf(a)>=0){
            i--;
        }else if(p.indexOf(b)>=0){
            j++;
        }
    }
    console.log(s.join(''));
});