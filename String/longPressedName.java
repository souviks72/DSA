//https://leetcode.com/problems/long-pressed-name/
class Solution {
    public boolean isLongPressedName(String name, String typed) {
        int i=0,j=0,n=name.length(),t=typed.length();
        if(name.equals(typed))
            return true;
        
        while(i<n && j<t){
            char ch = name.charAt(i);
            
            int ci=0,cj=0;
            while(i<n && name.charAt(i)==ch){
                i++;
                ci++;
            }
            if(typed.charAt(j)!=ch)
                return false;
            while(j<t && typed.charAt(j)==ch){
                j++;
                cj++;
            }
            if(cj<ci)
                return false;
            
        }
        if(i<n || j<t)
            return false;
        
        return true;
    }
}