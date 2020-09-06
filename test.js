let exp = "z(en(class)".split('');

let t = "",c =0;
let i=0, n = exp.length;
while(i<n){
    let ch = exp[i];
    if(ch!=='(' && ch!==')'){
        t += ch;
        i++;
    }else{
        if(ch==='('){
            let x="",flag=0,j=i+1;
            c = 1;
            while(j<n){
                let top = exp[j++];
                if(top==='('){ flag=1; break;}
                if(top===')'){ break;}
                x += top;
            }
            if(flag===1){ t+=x;}
            if(flag===0){ t = t + ch + x;}
            i = j-1;
        }else if(ch===')'){
            if(c===1){
                t += ch;
                c=0;
            }
            i++;
        }
    }
}
console.log(t);