//https://www.interviewbit.com/problems/reverse-the-string/
public class Solution {
    public String solve(String s) {
        s = s.trim();
        if(s.length()==0)
            return "";
        if(s.indexOf(' ')==-1)
            return s;
        ArrayList<String> arr = new ArrayList<String>();
        s+=" ";
        String t="";
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            if(ch==' '){
                if(t.length()>0){
                    arr.add(t);
                    t="";
                }
                
            }else{
                t+=ch;
            }
        }
        for(int i=arr.size()-1;i>=0;i--){
            t += arr.get(i)+" ";
        }
        t=t.trim();
        return t;
    }
}