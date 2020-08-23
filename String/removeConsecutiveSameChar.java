//https://www.interviewbit.com/problems/remove-consecutive-characters/
public class Solution {
    public String solve(String s, int b) {
        int i=0,j=0,c=0;
        int n = s.length();
        
        while(i<s.length()-1 && j<s.length()-1){
            j=i;
            while(j<s.length()-1 && s.charAt(j)==s.charAt(j+1)){
                j++;
                c++;
            }
            if(c==b-1){
                s = s.substring(0,i) + s.substring(i+b);
                
            }else{
                i++;
            }
            c=0;
        }
        return s;
    }
}