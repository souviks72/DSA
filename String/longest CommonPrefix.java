//https://www.interviewbit.com/problems/longest-common-prefix/
public class Solution {
    public String longestCommonPrefix(String[] arr) {
        Arrays.sort(arr);
        
        String a = arr[0];
        String b = arr[arr.length-1];
        
        String t = "";
        
        int i=0;
        while(i<a.length() && a.charAt(i)==b.charAt(i)){
            t+=a.charAt(i++);
        }
        return t;
    }
    
    class sortByAlph implements Comparator<String>{
        public int compare(String a,String b){
            return a.length() - b.length();
        }
    }
}
