//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
class Solution {
    String[] x = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    ArrayList<String> arr = new ArrayList();
    
    public List<String> letterCombinations(String digits) {
        if(digits.length()!=0)
            recur("",digits);
        return arr;
    }
    
    public void recur(String s,String digits){
        if(digits.length()==0){
            arr.add(s);
            return;
        }
        else{
            String digit = digits.substring(0,1);
            String t = x[Integer.parseInt(digit)];
            for(int i=0;i<t.length();i++){
                String a = t.substring(i,i+1);
                recur(s+a,digits.substring(1));
            }
        }
    }
}