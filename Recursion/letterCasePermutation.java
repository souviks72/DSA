//https://leetcode.com/problems/letter-case-permutation/submissions/
class Solution {
    List<String> arr = new ArrayList();
    public List<String> letterCasePermutation(String S) {
        subset(S.toLowerCase(),"");
        return arr;
    }
    
    public void subset(String ip,String op){
        if(ip.length()==0){
            if(!arr.contains(op))
                arr.add(op);
            return;
        }
        
        char ch = ip.charAt(0);
        
        if(Character.isDigit(ch)==true){
            String x = op+ip.charAt(0);
            if(ip.length()==1){
                arr.add(x);
                return;
            }
            subset(ip.substring(1,ip.length()),x);
            return;
        }
        
        String op1 = op + Character.toUpperCase(ch);
        String op2 = op + ch;
        ip = ip.substring(1);
        subset(ip,op1);
        subset(ip,op2);
    }
}