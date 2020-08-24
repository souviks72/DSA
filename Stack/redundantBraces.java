//https://www.interviewbit.com/problems/redundant-braces/
//https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/
public class Solution {
    public int braces(String s) {
        Stack<Character> st = new Stack();
        
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            
            if(ch==')'){
                char top = st.pop();
                int flag = 1;
                while( top!='('){
                    if(top=='+' ||top=='-'|| top=='*' || top=='/')
                        flag=0;
                    top = st.pop();
                }
                if(flag==1)
                    return 1;
            }else{
                st.push(ch);
            }
        }
        return 0;
    }
}
