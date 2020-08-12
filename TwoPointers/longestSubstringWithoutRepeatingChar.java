//https://leetcode.com/problems/longest-substring-without-repeating-characters/
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        if(n<2)
            return n;
        int i =0,j=1,max=1;
        String t = "";
        t+=s.charAt(0);
        while(i<n){
            while(j<n && t.indexOf(s.charAt(j))==-1){
                t+=s.charAt(j);
                j++;
            }
            i++;
            max = Math.max(t.length(),max);
            t="";
            if(i<n){
                t += s.charAt(i);
                j=i+1;
            }
        }
        return max;
    }
}