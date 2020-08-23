//https://www.interviewbit.com/problems/length-of-last-word/
public class Solution {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int lengthOfLastWord(final String s) {
        if(s.length()==0)
        return 0;
        String A = s.trim();
        if(A.length()==0)
            return 0;
        int i = A.lastIndexOf(' ');
        String t = A.substring(i+1);
        return t.length();
    }
}