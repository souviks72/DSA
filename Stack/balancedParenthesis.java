//https://www.interviewbit.com/problems/balanced-parantheses/
public class Solution {
    public int solve(String A) {
        Stack<Character> st = new Stack();
        int i=0,n=A.length();
        while(i<n){
            char ch = A.charAt(i);
            if(ch=='(')
                st.push(ch);
            else{
                if(st.empty())
                    return 0;
                else
                    st.pop();
            }
            i++;
        }
        if(st.empty())
            return 1;
        else
            return 0;
    }
}