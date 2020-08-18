//https://www.interviewbit.com/problems/compare-version-numbers/
public class Solution {
    public int compareVersion(String A, String B) {
        A += ".";
        B +=".";
        ArrayList<Long> arr = countPoints(A);
        ArrayList<Long> brr = countPoints(B);
        
        int i =0,j=0,na = arr.size(),nb = brr.size();
        while(i<na && j<nb){
            if(arr.get(i)>arr.get(j))
                return 1;
            i++;j++;
        }
        if(na==nb)
            return 0;
        else if(na>nb)
            return 1;
        else 
            return -1;
        
    }
    
    
    public ArrayList<Long> countPoints(String s){
        ArrayList<Long> arr = new ArrayList();
        int n = s.indexOf('.');
        while(n>0){
            long x = Long.parseLong(s.substring(0,n));
            arr.add(x);
            if(s.length()>1){
                s = s.substring(n+1);
                n = s.indexOf('.');
            }
        }
        return arr;
    }
}