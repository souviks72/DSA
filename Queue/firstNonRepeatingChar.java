//https://www.interviewbit.com/problems/first-non-repeating-character-in-a-stream-of-characters/
public class Solution {
    public String solve(String s) {
        String repeated = "";
        List<Character> arr = new ArrayList<Character>();
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            if(repeated.indexOf(ch)==-1){
                if(!arr.contains(ch)){
                    arr.add(ch);
                }else{
                    if(arr.size()>0)
                        arr.remove((Character)ch);
                    repeated += ch;
                }
            }
            if(arr.size()>0)
                sb.append(arr.get(0));
            else
                sb.append("#");
        }
        String t = sb.toString();
        return t;
    }
}