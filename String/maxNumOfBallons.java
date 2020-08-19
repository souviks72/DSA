//https://leetcode.com/problems/maximum-number-of-balloons/
class Solution {
    public int maxNumberOfBalloons(String s) {
        int[] freq = {0,0,0,0,0};
        String b = "ablno";
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            if(b.indexOf(ch)!=-1){
                freq[b.indexOf(ch)]++;
            }
        }
        int c=Integer.MAX_VALUE;
        freq[2] = (int)Math.floor(freq[2]/2);
        freq[4] = (int)Math.floor(freq[4]/2);
        for(int i=0;i<5;i++){
            if(freq[i]==0)
                return 0;
            c = Math.min(c,freq[i]);
        }
        return c;
    }
}