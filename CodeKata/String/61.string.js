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
    let date = userInput[0].split('-');
    let m = +date[1];
    let obj = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        10: "October",
        11: "November",
        12: "December",
        8: "August",
        9: "September"
    }
    console.log(obj[m]);
});