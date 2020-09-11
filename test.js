const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  let n = +userInput[0];
  let obj = {};
  let c=1;
  while(c<=n){
  	let [a,b] = userInput[c].split(' ').map(a => +a);
    c++;
    if(obj[a]){obj[a].push(b);}else{obj[a]=[b];}
  }
  let i=0,keys=Object.keys(obj),x = keys.length;
  let ans = [];
  while(i<x){
  	if(i===0){ans.push(keys[0])}
    else{
    	if(i%2===0){ ans.push(obj[keys[i]])}
    }
  }
  console.log(ans.join(' '));
})