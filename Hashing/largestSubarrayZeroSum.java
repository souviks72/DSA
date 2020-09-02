public class Solution {
    public int[] lszero(int[] arr) {
        HashMap<Integer,Integer> hm = new HashMap();
        int sum=0,max_len = 0,a=0,b=0,flag=0;
        for(int i=0;i<arr.length;i++){
            sum += arr[i];
            
            if(arr[i]==0 && max_len==0){
                a=i;
                b=i;
                max_len=1;
                flag=1;
            }
                
            if(sum==0){
                max_len = i+1;
                a=0;
                b=i;
                flag=1;
            }
                
            Integer prev = hm.get(sum);
                
            if(prev != null){
                int max = i - prev ;
                flag=1;
                if(max > max_len){
                    a=prev+1;
                    b=i;
                    max_len = max;
                }
            }else
                hm.put(sum,i);
        }
        
        if(flag==1){
            int n = b-a+1,c=0;
            int ans[] = new int[n];
            for(int i=a;i<=b;i++)
                ans[c++] = arr[i];
            return ans;
        }
        
        return new int[0];
    }
}