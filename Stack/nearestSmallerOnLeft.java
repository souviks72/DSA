//https://www.interviewbit.com/problems/nearest-smaller-element/
public class Solution {
    public int[] prevSmaller(int[] A) {
        return nsl(A);
    }
    
    public int[] nsl(int[] arr){
        int n = arr.length;
        int ans[] = new int[n];
        Stack<Integer> st = new Stack();
        
        for(int i=0;i<n;i++){
            int x = arr[i];
            
            if(st.empty()){
                ans[i] = -1;
                st.push(x);
            }else{
                if(st.peek()<x){
                    ans[i] = st.peek();
                    st.push(x);
                }else{
                    while(!st.empty() && st.peek()>=x)
                        st.pop();
                    if(st.empty()){
                        ans[i] = -1;
                        st.push(x);
                    }else{
                        ans[i] = st.peek();
                        st.push(x);
                    }
                }
            }
        }
        return ans;
    }
}