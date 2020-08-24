//https://www.interviewbit.com/problems/largest-rectangle-in-histogram/
public class Solution {
    public int largestRectangleArea(int[] arr) {
        int left[] = nsl(arr);
        int right[] = nsr(arr);
        
        int n = arr.length, max = -1;
        
        for(int i=0;i<n;i++){
            int l = left[i];
            int r = right[i];
            
            if(r==-1)
                r = n;
            int width = r - l - 1;
            int area = width * arr[i];
            max = Math.max(area,max);
        }
        return max;
    }
    
    public int[] nsl(int[] arr){
        int n = arr.length;
        int ans[] = new int[n];
        Stack<Integer> st = new Stack();
        
        for(int i=0;i<n;i++){
            int x = arr[i];
            
            if(st.empty()){
                ans[i] = -1;
                st.push(i);
            }else{
                if(arr[st.peek()]<x){
                    ans[i] = st.peek();
                    st.push(i);
                }else{
                    while(!st.empty() && arr[st.peek()]>=x)
                        st.pop();
                    if(st.empty()){
                        ans[i] = -1;
                        st.push(i);
                    }else{
                        ans[i] = st.peek();
                        st.push(i);
                    }
                }
            }
        }
        return ans;
    }
    
    public int[] nsr(int[] arr){
        int n = arr.length;
        int ans[] = new int[n];
        Stack<Integer> st = new Stack();
        
        for(int i=n-1;i>=0;i--){
            int x = arr[i];
            
            if(st.empty()){
                ans[i] = -1;
                st.push(i);
            }else{
                if(arr[st.peek()] < x){
                    ans[i] = st.peek();
                    st.push(i);
                }else{
                    while(!st.empty() && arr[st.peek()] >= x){
                        st.pop();
                    }
                    if(st.empty()){
                        ans[i] = -1;
                        st.push(i);
                    }else{
                        ans[i] = st.peek();
                        st.push(i);
                    }
                }
            }
        }
        return ans;
    }
}