//https://www.interviewbit.com/problems/amazing-subarrays/
public class Solution {
    public int solve(String s) {
        int sum = 0,i=0,n = s.length();
        String v = "aeiouAEIOU";
        while(i<n){
            char ch = s.charAt(i);
            if(v.indexOf(ch)>=0){
                sum += (n-i);
            }
            i++;
        }
        return sum%10003;
    }
}