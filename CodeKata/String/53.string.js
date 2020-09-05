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
    let obj = {};
    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);
        if(obj.hasOwnProperty(ch)){
            obj[ch]++
        }else if(ch!==' '){
            obj[ch] = 1;
        }
    }
    
    let keys = Object.keys(obj);
    let val = Object.values(obj);
    
    let ans = [];
    let min = Math.min.apply(this,val);
    
    for(let i=0;i<keys.length;i++){
        if(val[i]===min){
            ans.push(keys[i]);
        }
    }
    
    ans.sort((a,b)=>{
        s.indexOf(a) - s.indexOf(b)
    });
    
    console.log(ans.join(''));
});