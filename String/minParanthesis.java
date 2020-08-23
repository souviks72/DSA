//https://www.interviewbit.com/problems/minimum-parantheses/
public class Solution {
    public int solve(String s) {
        Stack<Character> st = new Stack();
        int i=0,c=0;
        while(i<s.length()){
            char ch = s.charAt(i);
            if(ch=='(')
                st.push(ch);
            else if(ch==')'){
                if(st.empty())
                    c++;
                else if(st.peek()=='(')
                    st.pop();
            }
            i++;
        }
        while(!st.empty()){
            c++;
            st.pop();
        }
        return c;
    }
}