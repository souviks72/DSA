inp.on("line", (data) => {
    userInput.push(data);
  });
  
  inp.on("close", () => {
      let [m,n] = userInput[0].split(' ').map(a => +a);
      console.log(m*n);
  });