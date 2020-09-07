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
    let s = userInput[0].split(' ');
    let ans = [];
    for(let i=0;i<s.length;i++){
        let word = s[i];
        let n = word.length;
        if(n>2)
        word = word[0] + word.substring(1,n-1).split('').reverse().join('') + word[n-1];
        ans.push(word);
    }
    console.log(`${ans.join(' ')}`);
});