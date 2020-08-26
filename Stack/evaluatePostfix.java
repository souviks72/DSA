public class Solution {
    public int evalRPN(String[] arr) {
        if(arr.length==1){
            return Integer.parseInt(arr[0]);
        }
        Stack<Integer> st = new Stack();
        
        int v = 0;
        for(int i=0;i<arr.length;i++){
            char c = arr[i].charAt(0);
            
            if(Character.isDigit(c) || arr[i].length()>1){
                int a = Integer.parseInt(arr[i]);
                st.push(a);
            }else{
                int a = st.pop();
                int b = st.pop();
                
                switch(c){
                    case '+': v= a+b;
                        break;
                    case '-': v= b-a;
                        break;
                    case '/': v= (int)Math.floor(a/b);
                        break;
                    case '*': v= a*b;
                        break;
                    default: v = 0;
                }
                st.push(v);
                v=0;
            }
        }
        return st.pop();
    }
}
