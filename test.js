  let s = userInput[0].split('');
 
  let t = "";
  let c=0,i=0,n=s.length;
  let st = [];
  while(i<n){
    let ch = s[i];
    if(ch!='(' && ch!=')'){ t+=ch;i++;}
    else{
      if(ch=='('){
        c=1;
      	let x="";
        let j = i+1,flag=0;
        while(j<n){
          let top = s[j++];
          if(top=='('){flag=1;break;}
          if(top==')'){break;}
          x += top;
        }
        if(flag===0){t = t + ch + x;}else{t+= x;};
        i=j-1;
      }
      else if(ch==')' ){
        if(c===1){
          t +=ch;
          c--;
        }
        i++;
      }
    }
    
  }
  console.log(t);