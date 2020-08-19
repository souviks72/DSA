//https://leetcode.com/problems/palindromic-substrings/
class Solution {
    int c = 1;
    public int countSubstrings(String s) {
        if(s.length()==0)
            return 0;
        for(int i=0;i<s.length()-1;i++){
            isPal(s,i,i);
            isPal(s,i,i+1);
        }
        return c;
    }
    
    public void isPal(String s,int i,int j){
        while(i>=0 && j<s.length() && s.charAt(i)==s.charAt(j)){
            c++;
            i--;
            j++;
        }
    }
}