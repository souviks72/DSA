public class Solution {
    // OVERFLOW NOT CHECKED
    public int atoi(final String A) {
        if(A.length()==0)
            return 0;
            
        String s = A;
        s=s.trim();
        int flag = 1,i=0;
        if(s.charAt(0)=='-'){
            flag=-1;i++;
        }else if(s.charAt(0)=='+'){
            i++;
        }
        int n = 0;
        while(i< s.length() && s.charAt(i)>='0' && s.charAt(i)<='9'){
            n = n*10 + s.charAt(i++)-'0';
        }
        return n;
    }
}