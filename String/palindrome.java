//https://www.interviewbit.com/problems/palindrome-string/
public class Solution {
    public int isPalindrome(String s) {
        int flag=0,j=0,i=s.length()-1;
        s=s.toLowerCase();
        while(i>=0 && j<s.length()){
            char ch = s.charAt(i);
            char c = s.charAt(j);
            
            if(Character.isLetterOrDigit(ch) && Character.isLetterOrDigit(c)){
                if(ch==c){
                    i--;
                    j++;
                    
                }else{
                    flag=1;
                    break;
                }
            }else if(!Character.isLetterOrDigit(ch))
                i--;
            else if(!Character.isLetterOrDigit(c))
                j++;
        }
        if(flag==0)
            return 1;
        else
            return 0;
    }
}
