//https://www.interviewbit.com/problems/implement-strstr/
public class Solution {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int strStr(final String txt, final String pat) {
        if(txt.length()==0 || pat.length()==0 || txt.length()<pat.length())
            return -1;
        int m = txt.length(), n = pat.length();
        int p=0,t=0,h=1,d=256,q=101,j=0,i=0;
        
        for(i=0;i<n-1;i++){
            h = (h*d) %q;
        }
        
        for(i=0;i<n;i++){
            p = (d*p + pat.charAt(i))%q;
            t = (d*t + txt.charAt(i))%q;
        }
        
        for(i=0;i<=m-n;i++){
            if(p==t){
                int flag=0;
                for(j=0;j<n;j++){
                    char a = txt.charAt(i+j);
                    char b = pat.charAt(j);
                    if(a!=b)
                        flag=1;
                }
                
                if(flag==0)
                    return i;
            }
            
            if(i<m-n){
                t = (d*(t - (txt.charAt(i)*h)) + txt.charAt(i+n))%q;
                if(t<0){
                    t +=q;
                }
            }
        }
        return -1;
    }
}